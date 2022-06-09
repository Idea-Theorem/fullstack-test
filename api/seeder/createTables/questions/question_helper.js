const createQuestionHelperTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS question_helper ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'helper_type VARCHAR,' +
        'question_title VARCHAR,' +
        'question_description VARCHAR,' +
        'question_image_url VARCHAR,' +
        'key_title VARCHAR,' +
        'key_description VARCHAR,' +
        'key_image_url VARCHAR,' +
        'solution_title VARCHAR,' +
        'solution_description VARCHAR,' +
        'solution_image_url VARCHAR,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('10 - Questions Helper table created!');
    });
}

module.exports = createQuestionHelperTable;
