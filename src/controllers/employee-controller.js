const employeeService = require('../services/empleoyee-service');
const EmployeeDTO = require('../dto/employee-dto');
const ErrorResponse = require('../dto/error-response');
const SuccessResponse = require('../dto/success-response');

const getAllEmployees = async (req, res, next) => {
    const serviceResponse = await employeeService.findAllEmployee();
    
    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};
const getEmployeeById = async (req, res, next) => {
    const { id } = req.params;
    const serviceResponse = await employeeService.findEmployeeById(id);

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};
const createEmployee = async (req, res, next) => {
    const employeeDTO = new EmployeeDTO(req.body);
    const serviceResponse = await employeeService.createEmployee(employeeDTO);

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().CreatedMessage(serviceResponse));
    }
};

const updateEmployee = async (req, res, next) => {
    const employeeDTO = new EmployeeDTO(req.body);
    const { id } = req.params;
    const serviceResponse = await employeeService.updateEmployee(employeeDTO, id);
    switch (serviceResponse){
        case 400:
            res.json(new ErrorResponse().BadRequestError());
            break;
        case 404:
            res.json(new ErrorResponse().notFoundError());
            break;
        default:
            res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

const deleteEmployee = async (req, res, next) => {
    const { id } = req.params;
    const serviceResponse = await employeeService.deleteEmployee(id);
    if(serviceResponse === 404){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

module.exports = {
    getAllEmployees: getAllEmployees,
    getEmployeeById: getEmployeeById,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}