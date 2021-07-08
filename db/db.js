const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "login"
  });
  
  conn.connect(function(err) {
    if (err) {
      console.log('Error connecting: ' + err.stack);
      return;
    };
    console.log("Connected!");
  });

  module.exports = conn