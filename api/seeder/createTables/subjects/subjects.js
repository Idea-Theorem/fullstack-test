const createSubjectTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS subjects ' +
        '(' +
        'id INT UNIQUE NOT NULL,' +
        'PRIMARY KEY (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
        'name VARCHAR NOT NULL,' +
        'points INT NOT NULL,' +
        'description VARCHAR NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('5 - Subjects table created!');
    });
}

module.exports = createSubjectTable;
