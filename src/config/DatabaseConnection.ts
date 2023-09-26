import { Pool } from 'pg';

// Define your PostgreSQL database connection options
const dbConfig = {
  user: 'your_database_user',
  password: 'your_database_password',
  host: 'your_database_host',
  database: 'your_database_name',
  port: 5432, // Change to your database port if it's not the default 5432
};

// Create a PostgreSQL database connection pool
const pool = new Pool(dbConfig);

// Handle database connection errors
pool.on('error', (err) => {
  console.error('PostgreSQL Pool Error:', err);
});

// Export the database connection pool
export { pool as DatabaseConnection };
