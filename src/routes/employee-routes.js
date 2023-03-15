const express = require('express');
const employeeController = require('../controllers/employee-controller');
const {validatePost,validatePut} = require('../utils/validate/employee');
const { validateId, validatePagination } = require('../utils/validate/params');

//creacion del router de empleados
const employeeRoutes = express.Router();

//Asigacion de paths y middleware para cada ruta del router de empleados
employeeRoutes
    .route('/')
    .get(employeeController.getAllEmployees)
    .post(validatePost, employeeController.createEmployee);
    
employeeRoutes
    .route('/:id')
    .get(validateId, employeeController.getEmployeeById)
    .put(validatePut, validateId, employeeController.updateEmployee)
    .delete(validateId, employeeController.deleteEmployee);

    employeeRoutes
    .route('/items/:items/page/:page')
    .get(validatePagination, employeeController.getPaginatedEmployee);

module.exports = employeeRoutes;