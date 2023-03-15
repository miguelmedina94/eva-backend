const { param } = require('express-validator');

const validateId = [
    param('id')
        .isNumeric()
        .withMessage('This is a not valid id param')
        .notEmpty()
        .withMessage('id is require')
];

const validatePagination = [
    param('items')
        .isNumeric()
        .withMessage('This is a not valid item param')
        .isInt({min: 3})
        .withMessage('This is a not valid item param')
        .notEmpty()
        .withMessage('id is require'),
    param('page')
        .isNumeric()
        .withMessage('This is a not valid page param')
        .isInt({min: 1})
        .withMessage('This is a not valid item param')
        .notEmpty()
        .withMessage('id is require')
];

module.exports = {
    validateId: validateId,
    validatePagination
}