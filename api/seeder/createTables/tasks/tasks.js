const createTasksTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS tasks ' +
        '(' +
        'id INT UNIQUE NOT NULL,' +
        'PRIMARY KEY (id),' +
        'skill_id INT NOT NULL,' +
        'FOREIGN KEY (skill_id) REFERENCES skills (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
        'topic_id INT NOT NULL,' +
        'FOREIGN KEY (topic_id) REFERENCES topics (id),' +
        'name VARCHAR NOT NULL,' +
        'points INT NOT NULL,' +
        'difficult_level INT,' +
        'description VARCHAR,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('8 - Tasks table created!');
    });
};

module.exports = createTasksTable;
