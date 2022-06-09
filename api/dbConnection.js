const { Pool, Client } = require('pg');

const dbClient = new Pool({
  host: process.env.HEROKU_HOST || process.env.DB_HOST || 'localhost',
  user: process.env.HEROKU_USER || process.env.DB_USER || 'igormori',
  password: process.env.HEROKU_PASSWORD || process.env.DB_PASSWORD || 'Igor232564',
  port: process.env.HEROKU_PORT || process.env.DB_PORT || 5432,
  database: process.env.HEROKU_DB || process.env.DB_NAME || 'genius_db',
  // TODO: Please remove it when the application goes to production
  ssl: {
    rejectUnauthorized: false,
  },
});

// Single Query: it closes the client connection after the query is completed
const SingleDbClient = new Client({
  host: process.env.HEROKU_HOST || process.env.DB_HOST || 'localhost',
  user: process.env.HEROKU_USER || process.env.DB_USER || 'igormori',
  password: process.env.HEROKU_PASSWORD || process.env.DB_PASSWORD || 'Igor232564',
  port: process.env.HEROKU_PORT || process.env.DB_PORT || 5432,
  database: process.env.HEROKU_DB || process.env.DB_NAME || 'genius_db',
  // TODO: Please remove it when the application goes to production
  ssl: {
    rejectUnauthorized: false,
  },
});

if (process.env.DB_HOST) {
  console.log('Database: PRODUCTION');
} else {
  console.log('Database: DEVELOPMENT');
}
module.exports = {
  dbClient,
  SingleDbClient,
};
