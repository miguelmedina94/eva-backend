const employeeModel = require('../models/employee-model');
const assetModel = require('../models/asset-model');

class EmployeeService {
    static async findAllEmployee () {
        const modelResponse = await employeeModel.findAllEmployee();
        return modelResponse.length > 0 ? modelResponse : null;
    }

    static async findEmployeeById (id) {
        const modelResponse = await employeeModel.findEmployeeById(id);
        return modelResponse.length > 0 ? modelResponse[0] : null;
    }

    static async createEmployee (employee) {
        const modelResponse = await employeeModel.createEmployee(employee);
        return modelResponse ? modelResponse : null;
    }

    static async updateEmployee (employee, id) {
        const findResponse = await this.findEmployeeById (id);
        if(findResponse){
            const updateResponse = await employeeModel.updateEmployee(employee,id);
            return updateResponse ? {afectedRows: updateResponse} : 400;
        }else{
            return 404;
        }
    }

    static async deleteEmployee (id) {
        const findResponse = await this.findEmployeeById (id);
        if(findResponse){
            const gralResponse = {};
            const deleteAssetsResponse = await assetModel.deleteAssetByEmployeeId(id);
            gralResponse.AssetsAfectedRows = deleteAssetsResponse;
            const deleteEmployeeResponse = await employeeModel.deleteEmployee(id);
            gralResponse.EmployeeAfectedRows = deleteEmployeeResponse;
            return deleteAssetsResponse && deleteEmployeeResponse ? gralResponse : 400;
        }else{
            return 404;
        }
    }
}

module.exports = EmployeeService;