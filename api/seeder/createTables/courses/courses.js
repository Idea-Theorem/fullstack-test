const createCourseTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS courses ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'name VARCHAR NOT NULL,' +
        'points INT NOT NULL,' +
        'description VARCHAR NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('4 - Courses table created!');
    });
}

module.exports = createCourseTable;
