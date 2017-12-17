
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE  bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100) NULL,
department_name VARCHAR (100) NULL,
price DECIMAL (10,4) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES
	(1, "hammock", "outdoors", 40.00,65),
    (2, "tent", "outdoors", 90.00, 20), 
    
    (3, "iPad", "electronics", 500.00, 90), 
    (4, "headphones", "electronics", 300.00, 100), 
    (5, "iPhone8", "electronics", 900.00, 50),
    
    (6, "cereal", "food", 5.00, 30), 
    (7, "milk", "food", 4.00, 20), 
    (8, "chocolate", "food", 6.00, 40), 
    
    (9, "keurig", "appliances", 150.00, 70), 
    (10, "microwave", "appliances", 200.00, 50);