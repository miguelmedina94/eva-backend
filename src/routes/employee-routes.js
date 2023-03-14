const express = require('express');
const employeeController = require('../controllers/employee-controller');

//creacion del router de empleados
const employeeRoutes = express.Router();

//Asigacion de paths para cada ruta del router de empleados
employeeRoutes
    .route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createEmployee);
    
employeeRoutes
    .route('/:id')
    .get(employeeController.getEmployeeById)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

module.exports = employeeRoutes;