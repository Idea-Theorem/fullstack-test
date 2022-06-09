const createTopicsTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS topics ' +
        '(' +
        'id INT UNIQUE NOT NULL,' +
        'PRIMARY KEY (id),' +
        'subject_id INT NOT NULL,' +
        'FOREIGN KEY (subject_id) REFERENCES subjects (id),' +
        'course_id INT NOT NULL,' +
        'FOREIGN KEY (course_id) REFERENCES courses (id),' +
        'name VARCHAR NOT NULL,' +
        'points INT NOT NULL,' +
        'description VARCHAR NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('6 - Topics table created!');
    });
};

module.exports = createTopicsTable;
