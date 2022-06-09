const createTopicLevelTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS topic_level ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'practice_id INT NOT NULL,' +
        'FOREIGN KEY (practice_id) REFERENCES topic_practice (id),' +
        'topic_id INT NOT NULL,' +
        'FOREIGN KEY (topic_id) REFERENCES topics (id),' +
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
      console.log('23 - topic_level table created!');
    });
};

module.exports = createTopicLevelTable;
