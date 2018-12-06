var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connect = mysql.createConnection({
  post: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});
connect.connect();

module.exports = connect;

// use the database connection to store data as messages come in