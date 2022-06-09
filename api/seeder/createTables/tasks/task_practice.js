const createTaskPracticeTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS task_practice ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'task_id INT NOT NULL,' +
        'FOREIGN KEY (task_id) REFERENCES tasks (id),' +
        'questions json[],' +
        'total_points INT,' +
        'total_time INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'total_questions INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('19 - task_practice table created!');
    });
};

module.exports = createTaskPracticeTable;
