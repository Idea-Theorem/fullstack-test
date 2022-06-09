const createQuestionsTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS questions ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
        'topic_id INT NOT NULL,' +
        'FOREIGN KEY (topic_id) REFERENCES topics (id),' +
        'skill_id INT NOT NULL,' +
        'FOREIGN KEY (skill_id) REFERENCES skills (id),' +
        'task_id INT NOT NULL,' +
        'FOREIGN KEY (task_id) REFERENCES tasks (id),' +
        'points INT NOT NULL,' +
        'question_type VARCHAR,' +
        'title VARCHAR,' +
        'description VARCHAR,' +
        'answer VARCHAR NOT NULL,' +
        'question_options json[],' +
        'image_url VARCHAR,' +
        'difficult_level INT,' +
        'question_helper_id VARCHAR,' +
        'created_at timestamptz NOT NULL DEFAULT now(),' +
        'updated_at timestamptz DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('9 - Questions table created!');
    });
}

module.exports = createQuestionsTable;
