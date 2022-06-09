const createTaskLearnerTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS task_learner ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'task_id INT NOT NULL,' +
        'FOREIGN KEY (task_id) REFERENCES tasks (id),' +
        'points INT,' +
        'total_time INT,' +
        'total_questions INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'skill_level INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('9 - task_learner table created!');
    });
};

module.exports = createTaskLearnerTable;
