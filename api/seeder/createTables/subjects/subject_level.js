const createSubjectLevelTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS subject_level ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'practice_id INT NOT NULL,' +
        'FOREIGN KEY (practice_id) REFERENCES topic_practice (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
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
      console.log('22 - subject_level table created!');
    });
};

module.exports = createSubjectLevelTable;
