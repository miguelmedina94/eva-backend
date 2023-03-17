
# Eva-Backend

## Description
This project is a backend server that is prepared to receive RESTful queries to CRUD employees and assets on a database.

## Installation
To install the application it is necessary to run the "npm install" command.

## Usage 
To use the API we can make queries through another API or the "Postman" software or any tool that is capable of sending http requests and receiving their response.
For each entity (employees and assets) we can make http queries.


### Usage Examples

#### Empleados

(POST / Create) HOST:PORT/api/employees This query is aimed at creating a new employee in the "employees" table.
In case of success, it will return a message with code 201 (CREATED). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(GET / findAll) HOST:PORT/api/employees --> this query returns all the employees registered in the database. Filters can also be added to the query by adding "?" a parameter and an approximate value to look for, for example : HOST:PORT/api/employees?first_name=Mi --> will return all employees whose first_name starts with "Mi". The fields that can be filtered by are "first_name", "last_name", "cuit", "team_id", "join_date", "role".
This endpoint is also able to paginate the result as the consumer wants by adding the "items" parameter for the number of items per page (minimum 3) and "page" to indicate the page number.If there is no employee who meets the requirements, it will return a 404 (not Found) error.
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(GET / findById) HOST:PORT/api/employees/:id --> this query returns an employee with the exact id which we add to the end of the query. If there is no employee who meets the requirements, it will return a 404 (not Found) error.
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(PUT / update ) HOST:PORT/api/employees/:id --> This query deals with updating the employee's data, first verifying that the employee exists, if it does not exist, it returns a 404 (not found) error. You have to specify a body of JSON type OPTIONALLY each parameter "first_name", "last_name", "cuit", "team_id", "join_date", "role".
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(DELETE / delete) HOST:PORT/api/employees/:id This query deals with delete the employee's data, first verifying that the employee exists, if it does not exist, it returns a 404 (not found) error. if the employee has linked assets (FK) it unlinks them by setting their FK to null.
In case of success, it will return a message with code 200 (OK). If any of the SENT id is wrong, it will return a 400 error (bad request).

#### Assets

(POST / Create) HOST:PORT/api/assets This query is aimed at creating a new asset in the "assets" table.
In case of success, it will return a message with code 201 (CREATED). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(GET / findAll) HOST:PORT/api/assets --> this query returns all the assets registered in the database. Filters can also be added to the query by adding "?" a parameter and an approximate value to look for, for example : HOST:PORT/api/assets?name=Si --> will return all assets whose first_name starts with "Si". The fields that can be filtered by are "name", "type", "code", "description", "purchase_date", "employee_id".
This endpoint is also able to paginate the result as the consumer wants by adding the "items" parameter for the number of items per page (minimum 3) and "page" to indicate the page number.If there is no asset who meets the requirements, it will return a 404 (not Found) error.
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(GET / findById) HOST:PORT/api/assets/:id --> this query returns an asset with the exact id which we add to the end of the query. If there is no asset who meets the requirements, it will return a 404 (not Found) error.
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(PUT / update ) HOST:PORT/api/assets/:id --> This query deals with updating the asset's data, first verifying that the asset and the new employee_id if needed exists, if it does not exist, it returns a 404 (not found) error. You have to specify a body of JSON type OPTIONALLY each parameter "name", "type", "code", "description", "purchase_date", "employee_id".
In case of success, it will return a message with code 200 (OK). If any of the SENT parameters is wrong, it will return a 400 error (bad request).

(DELETE / delete) HOST:PORT/api/assets/:id This query deals with delete the asset's data, first verifying that the asset exists, if it does not exist, it returns a 404 (not found) error. 
In case of success, it will return a message with code 200 (OK). If any of the SENT id is wrong, it will return a 400 error (bad request).

## Database schema

### Create DB 
CREATE DATABASE vortex;

### Create Employees Table
CREATE TABLE `employees` (  `id` int(11) NOT NULL,  `first_name` varchar(50) NOT NULL,  `last_name` varchar(50) NOT NULL,  `cuit` int(11) DEFAULT NULL,  `team_id` int(11) DEFAULT NULL,  `join_date` date NOT NULL,  `rol` varchar(50) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

### Create Assets Table
CREATE TABLE `assets` (  `id` mediumint(7) NOT NULL,  `name` varchar(50) NOT NULL,  `type` varchar(30) NOT NULL,  `code` varchar(25) DEFAULT NULL,  `description` varchar(200) DEFAULT NULL,  `purchase_date` date NOT NULL,  `employee_id` int(11) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

