const createPreSignUpTable = async (dbClient) => {
  await dbClient.query(
    'CREATE TABLE IF NOT EXISTS contact_us ' +
    '(' +
    'id SERIAL PRIMARY KEY,' +
    'role VARCHAR NOT NULL,' +
    'first_name VARCHAR NOT NULL,' +
    'last_name VARCHAR NOT NULL,' +
    'email VARCHAR NOT NULL,' +
    'phone VARCHAR,' +
    'message VARCHAR NOT NULL,' +
    'created_at timestamptz NOT NULL DEFAULT now()' +
    ')'
  ).then((success) => {
    console.log('16 - Pre Signup table created!');
  });
};

module.exports = createPreSignUpTable;
