const createLearnersTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS learners ' +
        '(' +
        'id VARCHAR UNIQUE NOT NULL,' +
        'PRIMARY KEY (id),' +
        'subscription_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (subscription_id) REFERENCES subscriptions (id),' +
        'name VARCHAR NOT NULL,' +
        'gender VARCHAR,' +
        'learner_type VARCHAR NOT NULL,' +
        'password VARCHAR,' +
        'newsletter_email BOOL,' +
        'emails VARCHAR[],' +
        'question_notification BOOL,' +
        'hints_notification BOOL,' +
        'summary_reports BOOL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('3 - Learners table created!');
    });
}

module.exports = createLearnersTable;
