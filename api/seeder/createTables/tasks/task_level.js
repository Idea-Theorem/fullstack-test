const createTaskLevelTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS task_level ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'practice_id INT NOT NULL,' +
        'FOREIGN KEY (practice_id) REFERENCES task_practice (id),' +
        'task_id INT NOT NULL,' +
        'FOREIGN KEY (task_id) REFERENCES tasks (id),' +
        'level INT,' +
        'total_points INT,' +
        'total_time INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'total_questions INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('24 - task_level table created!');
    });
};

module.exports = createTaskLevelTable;
