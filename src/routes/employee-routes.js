const express = require('express');
const employeeController = require('../controllers/employee-controller');
const {validateEmployeeRules, validateIdRules} = require ('../utils/validate-middleware');

//creacion del router de empleados
const employeeRoutes = express.Router();

//Asigacion de paths y middleware para cada ruta del router de empleados
employeeRoutes
    .route('/')
    .get(employeeController.getAllEmployees)
    .post(validateEmployeeRules, employeeController.createEmployee);
    
employeeRoutes
    .route('/:id')
    .get(validateIdRules, employeeController.getEmployeeById)
    .put(validateEmployeeRules, validateIdRules, employeeController.updateEmployee)
    .delete(validateIdRules, employeeController.deleteEmployee);

module.exports = employeeRoutes;