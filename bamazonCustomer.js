var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});

// check to see if connected to mysql database
connection.connect(function(err){
    console.log("Connected as id: " + connection.threadId);
})
// ===========================================================


