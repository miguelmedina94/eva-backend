const express = require('express');
const assetsController = require('../controllers/asset-controller');

//creacion del router de empleados
const assetsRoutes = express.Router();

//Asigacion de paths para cada ruta del router de empleados
assetsRoutes
    .route('/')
    .get(assetsController.getAllAssets)
    .post(assetsController.createAsset);

assetsRoutes
    .route('/:id')
    .get(assetsController.getAssetById)
    .put(assetsController.updateAsset)
    .delete(assetsController.deleteAsset);

assetsRoutes
    .route('/employeeId/:id')
    .get(assetsController.getAssetsByEmployeeId);

module.exports = assetsRoutes;