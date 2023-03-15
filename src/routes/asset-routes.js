const express = require('express');
const assetsController = require('../controllers/asset-controller');
const { validatePost, validatePut } = require('../utils/validate/assets');
const { validateId, validatePagination } = require('../utils/validate/params');

//creacion del router de empleados
const assetsRoutes = express.Router();

//Asigacion de paths para cada ruta del router de empleados
assetsRoutes
    .route('/')
    .get(assetsController.getAllAssets)
    .post(validatePost, assetsController.createAsset);

assetsRoutes
    .route('/:id')
    .get(validateId, assetsController.getAssetById)
    .put(validatePut, validateId, assetsController.updateAsset)
    .delete(validateId, assetsController.deleteAsset);

assetsRoutes
    .route('/employeeId/:id')
    .get(validateId, assetsController.getAssetsByEmployeeId);

assetsRoutes
    .route('/items/:items/page/:page')
    .get(validatePagination, assetsController.getPaginatedAssets);

module.exports = assetsRoutes;