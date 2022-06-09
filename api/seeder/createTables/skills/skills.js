const createSkillsTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS skills ' +
        '(' +
        'id INT UNIQUE NOT NULL,' +
        'PRIMARY KEY (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
        'topic_id INT NOT NULL,' +
        'FOREIGN KEY (topic_id) REFERENCES topics (id),' +
        'name VARCHAR NOT NULL,' +
        'points INT NOT NULL,' +
        'description VARCHAR NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('7 - Skills table created!');
    });
};

module.exports = createSkillsTable;
