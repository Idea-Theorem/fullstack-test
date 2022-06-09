const createSubscriptionTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS subscriptions ' +
        '(' +
        'id VARCHAR NOT NULL UNIQUE,' +
        'PRIMARY KEY (id),' +
        'payment_id VARCHAR NOT NULL UNIQUE,' +
        'user_id VARCHAR NOT NULL,' +
        'user_name VARCHAR NOT NULL,' +
        'full_name VARCHAR NOT NULL,' +
        'subscription_plan VARCHAR NOT NULL,' +
        'status VARCHAR NOT NULL,' +
        'user_type VARCHAR NOT NULL,' +
        'email VARCHAR NOT NULL,' +
        'number_of_children INT,' +
        'onboarding BOOL,' +
        'next_billing_date DATE NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('1 - Subscriptions table created!');
    });
};

module.exports = createSubscriptionTable;
