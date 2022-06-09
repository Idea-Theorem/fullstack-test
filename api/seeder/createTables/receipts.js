const createReceiptsTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS receipts ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'subscription_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (subscription_id) REFERENCES subscriptions (id),' +
        'payment_id VARCHAR NOT NULL UNIQUE,' +
        'reference_number INT NOT NULL,' +
        'receipt_type VARCHAR NOT NULL,' +
        'card_number VARCHAR,' +
        'card_expiration_date VARCHAR NOT NULL,' +
        'amount INT NOT NULL,' +
        'status VARCHAR NOT NULL,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('2 - Receipts table created!');
    });
}

module.exports = createReceiptsTable
