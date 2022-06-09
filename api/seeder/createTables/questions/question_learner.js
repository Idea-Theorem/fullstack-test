const createQuestionLearnerTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS question_learner ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'question_id INT NOT NULL,' +
        'FOREIGN KEY (question_id) REFERENCES questions (id),' +
        'points INT,' +
        'total_time INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('20 - question_learner table created!');
    });
};

module.exports = createQuestionLearnerTable;
