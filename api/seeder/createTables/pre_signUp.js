const createPreSignUpTable = async (dbClient) => {
  await dbClient.query('CREATE TABLE IF NOT EXISTS pre_signup ' + '(' + 'id SERIAL PRIMARY KEY,' + 'email VARCHAR UNIQUE NOT NULL' + ')').then((success) => {
    console.log('16 - Pre Signup table created!');
  });
};

module.exports = createPreSignUpTable;
