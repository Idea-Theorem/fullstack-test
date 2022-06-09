const { dbClient } = require('../../dbConnection');

const updateTaskLearnerQuery = (data, task_id, learner_id) => {
  return `
    UPDATE task_learner
    SET total_time = COALESCE(total_time, 0) + ${data.total_time},
    attempts = COALESCE(attempts, 0) + ${data.attempts_counter},
    wrong_attempts = COALESCE(wrong_attempts, 0) + ${data.wrong_attempts},
    points = COALESCE(points, 0) +  ${data.points},
    total_questions = COALESCE(total_questions, 0) + ${data.total_questions}
    WHERE task_id = ${task_id}
    AND learner_id = '${learner_id}'
    RETURNING *
  `;
};

const insertTaskLearnerQuery = (data, task_id, learner_id) => {
  return {
    text:
      'INSERT INTO task_learner(' + 'learner_id,' + 'task_id,' + 'total_time,' + 'attempts,' + 'wrong_attempts,' + 'total_questions,' + 'points' + ') VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
    values: [learner_id, task_id, data.total_time, data.attempts_counter, data.wrong_attempts, data.total_questions, parseInt(data.points, 10)],
  };
};

const getTopicLearner = (task_id, learner_id) => {
  return `
    SELECT 
      task_learner.points as task_learner_points,
	    tasks.points 
      FROM task_learner

      INNER JOIN tasks
	 	    ON tasks.id = ${task_id}
      
      WHERE task_id = ${task_id}
         AND learner_id = '${learner_id}'

      GROUP BY task_learner.points, tasks.points;
  `;
};

const calculateLevel = (learner_points, points) => {
  const percentage = (learner_points / points) * 100;
  if (percentage <= 25) return 1;
  if (percentage > 25 && percentage <= 50) return 2;
  if (percentage > 50 && percentage <= 75) return 3;
  if (percentage > 75 && percentage <= 100) return 4;
};

const checkLevel = (task_learner, practice_results) => {
  if (task_learner.task_learner_points === null || task_learner.task_learner_points === 0) return 1;
  const current_level = calculateLevel(task_learner.task_learner_points, task_learner.points);
  const next_level = calculateLevel(practice_results.points, task_learner.points);
  if (current_level !== next_level) return next_level;
  return false;
};

const upgradeLevel = (data, learner_id, task_id, practice_id, upgrade_level) => {
  return {
    text:
      'INSERT INTO task_level(' +
      'learner_id,' +
      'practice_id,' +
      'task_id,' +
      'total_time,' +
      'attempts,' +
      'wrong_attempts,' +
      'total_questions,' +
      'level,' +
      'total_points' +
      ') VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
    values: [learner_id, practice_id, task_id, data.total_time, data.attempts, data.wrong_attempts, data.total_questions, upgrade_level, parseInt(data.points, 10)],
  };
};

const insertTaskPracticeQuery = (data, task_id, learner_id) => {
  const { total_time, attempts_counter, wrong_attempts, total_questions, points } = data.validation_control;
  const { questions } = data;
  return {
    text:
      'INSERT INTO task_practice(' +
      'learner_id,' +
      'task_id,' +
      'total_time,' +
      'attempts,' +
      'wrong_attempts,' +
      'total_questions,' +
      'total_points,' +
      'questions' +
      ') VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;',
    values: [learner_id, task_id, total_time, attempts_counter, wrong_attempts, total_questions, parseInt(points, 10), questions],
  };
};

module.exports = handleTaskProgress = async (data, learner_id) => {
  try {
    const TASK_ID = data.id;
    const { validation_control } = data;

    const task_learner = await dbClient.query(getTopicLearner(TASK_ID, learner_id));

    let update_result;
    let upgrade_level = false;

    if (task_learner.rows.length > 0) {
      update_result = await dbClient.query(updateTaskLearnerQuery(validation_control, TASK_ID, learner_id));
      upgrade_level = checkLevel(task_learner.rows[0], validation_control);
    } else {
      update_result = await dbClient.query(insertTaskLearnerQuery(validation_control, TASK_ID, learner_id));
      upgrade_level = 1;
    }

    if (update_result.rowCount !== 1) {
      throw new Error('Error to update the task_learner');
    }

    const create_practice = await dbClient.query(insertTaskPracticeQuery(data, TASK_ID, learner_id));

    if (create_practice.rowCount !== 1) {
      throw new Error('Error to create the task_practice');
    }

    const PRACTICE_ID = create_practice.rows[0].id;

    if (upgrade_level) {
      upgrade_level = await dbClient.query(upgradeLevel(update_result.rows[0], learner_id, TASK_ID, PRACTICE_ID, upgrade_level));
    }

    return {
      result: update_result.rowCount === 1,
      level: upgrade_level ? upgrade_level.rows[0] : upgrade_level,
      data: update_result.rows[0],
    };
  } catch (error) {
    console.log(error);
    return {
      message: error,
      result: false,
    };
  }
};
