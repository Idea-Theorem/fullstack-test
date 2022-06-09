const createCourseLearnerTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS course_learner ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
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
      console.log('12 - course_learner table created!');
    });
};

module.exports = createCourseLearnerTable;
