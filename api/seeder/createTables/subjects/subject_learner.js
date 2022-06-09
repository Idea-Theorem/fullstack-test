const createSubjectLearnerTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS subject_learner ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
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
      console.log('11 - subject_learner table created!');
    });
};

module.exports = createSubjectLearnerTable;
