var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

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
// mysql connection working 
// ===========================================================

// functions which prompts the user for thier orders 
// var start = function (){
//     inquirer.prompt(
//         {
//             name: "item_id",
//             text: "input",
//             message: "Enter the item ID of the item you would like to order."
//         },
//         {
//             name: "item_id",
//             text: "input",
//             message: "Enter the quantity you would like to order."
//         }
//     ).then(function(answer) {
//         connection.query ("INSERT INTO products SET ?",
// 

// psuedo code 
// display the PRODCUTS TABLE on command line
// ask the user what item they would like to purchase and the quantity 
// application should check if your store has enough of the product to meet the customer's request
// display INSUFFICIENT QUANTITY if not enough stock 
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

