//file name connect.js
//author: Supernova
//date: 16/6/2022
var sql = require("mysql");

   // Create a connection to the database
var connection = sql.createConnection({
    host: "localhost",
    user: "root", //mysql username
    password: "", //mysql password
    database: "mtg_db" //your database name
  });
  
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  }); 

module.exports = connection;
