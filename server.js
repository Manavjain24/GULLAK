// Import required modules
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

// Initialize the Express app
const app = express();

// Set the port
const port = process.env.PORT || 5000;

// Create the MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the SQL database');
});

// Define your API routes below
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Example API route to interact with the database
app.get('/get-data', (req, res) => {
  const query = 'SELECT * FROM your_table_name'; // Update with actual table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.status(200).json(results);
  });
});

// Start the server after all routes and configurations
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


