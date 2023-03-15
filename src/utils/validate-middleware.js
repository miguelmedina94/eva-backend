const { body, param } = require('express-validator');

const validateEmployeeRules = [
    body('first_name')
        .isString()
        .withMessage('This is a not valid first_name')
        .notEmpty()
        .withMessage('first_name is require')
        .isLength({min: 3, max: 50})
        .withMessage('first_name have a not valid length'),
    body('last_name')
        .isString()
        .withMessage('This is a not valid last_name')
        .notEmpty()
        .withMessage('last_name is require')
        .isLength({min: 3, max: 50})
        .withMessage('last_name have a not valid length'),
    body('cuit')
        .isNumeric()
        .withMessage('This is a not valid cuit')
        .notEmpty()
        .withMessage('cuit is require')
        .isLength({min: 11, max: 11})
        .withMessage('cuit have a not valid length'),
    body('team_id')
        .isNumeric()
        .withMessage('This is a not valid team_id'),
    body('join_date')
        .isDate()
        .withMessage('This is a not valid date')
        .notEmpty()
        .withMessage('join_date is require'),
    body('rol')
        .isString()
        .withMessage('This is a not valid rol')
        .notEmpty()
        .withMessage('rol is require')
        .isLength({min: 3, max: 50})
        .withMessage('rol have a not valid length'),
];

const validateAssetRules = [
    body('name')
        .isString()
        .withMessage('This is a not valid name')
        .notEmpty()
        .withMessage('name is require')
        .isLength({min: 3, max: 50})
        .withMessage('name have a not valid length'),
    body('type')
        .isString()
        .withMessage('This is a not valid type')
        .notEmpty()
        .withMessage('type is require')
        .isLength({min: 3, max: 30})
        .withMessage('type have a not valid length'),
    body('code')
        .isAlphanumeric()
        .withMessage('This is a not valid code')
        .isLength({min: 10, max: 25})
        .withMessage('code have a not valid length'),
    body('description')
        .isString()
        .withMessage('This is a not valid description')
        .isLength({max: 200})
        .withMessage('description have a not valid length'),
    body('purchase_date')
        .isDate()
        .withMessage('This is a not valid purchase_date')
        .notEmpty()
        .withMessage('purchase_date is require'),
    body('employee_id')
        .isString()
        .withMessage('This is a not valid id')
        .notEmpty()
        .withMessage('employee_id is require')
        .isLength({max: 11})
        .withMessage('employee_id have a not valid length'),
];

const validateIdRules = [
    param('id')
        .isNumeric()
        .withMessage('This is a not valid id')
        .notEmpty()
        .withMessage('id is require')
];


module.exports = {
    validateEmployeeRules: validateEmployeeRules,
    validateAssetRules: validateAssetRules,
    validateIdRules: validateIdRules
}