const createTopicPracticeTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS topic_practice ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'topic_id INT NOT NULL,' +
        'FOREIGN KEY (topic_id) REFERENCES topics (id),' +
        'skills json[],' +
        'tasks json[],' +
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
      console.log('16 - topic_practice table created!');
    });
};

module.exports = createTopicPracticeTable;
