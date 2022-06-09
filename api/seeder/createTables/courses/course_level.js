const createCourseLevelTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS course_level ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'practice_id INT NOT NULL,' +
        'FOREIGN KEY (practice_id) REFERENCES topic_practice (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
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
      console.log('21 - course_level table created!');
    });
};

module.exports = createCourseLevelTable;
