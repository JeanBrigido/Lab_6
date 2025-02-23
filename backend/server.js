const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'database-1.cnqe00p5d1ax.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Timndbpw10!',
  database: 'jeandb',
  port: 3306
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Employee Management API');
});

// API endpoints
app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) {
      console.error('Error fetching employees:', err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post('/employees', (req, res) => {
  const { first_name, last_name, email, birthdate, salary } = req.body;
  db.query('INSERT INTO employees (first_name, last_name, email, birthdate, salary) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, email, birthdate, salary], (err, results) => {
    if (err) {
      console.error('Error adding employee:', err);
      return res.status(500).send(err);
    }
    res.json({ id: results.insertId, first_name, last_name, email, birthdate, salary });
  });
});

app.put('/employees/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, birthdate, salary } = req.body;
  db.query('UPDATE employees SET first_name = ?, last_name = ?, email = ?, birthdate = ?, salary = ? WHERE employee_id = ?', [first_name, last_name, email, birthdate, salary, id], (err, results) => {
    if (err) {
      console.error('Error updating employee:', err);
      return res.status(500).send(err);
    }
    res.json({ id, first_name, last_name, email, birthdate, salary });
  });
});

app.delete('/employees/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM employees WHERE employee_id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error deleting employee:', err);
      return res.status(500).send(err);
    }
    res.json({ id });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});