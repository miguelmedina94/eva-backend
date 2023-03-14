const assetsService = require('../services/asset-service');
const AssetDTO = require('../dto/asset-dto');
const ErrorResponse = require('../dto/error-response');
const SuccessResponse = require('../dto/success-response');

const getAllAssets = async (req, res, next) => {
    const serviceResponse = await assetsService.findAllAssets();

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

const getAssetById = async (req, res, next) => {
    const { id } = req.params ;
    const serviceResponse = await assetsService.findAssetById(id);

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

const getAssetsByEmployeeId = async (req, res, next) => {
    const { id } = req.params ;
    const serviceResponse = await assetsService.findAssetByEmployeeId(id);

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

const createAsset = async (req, res, next) => {
    const assetDTO = new AssetDTO(req.body);
    const serviceResponse = await assetsService.createAsset(assetDTO);

    if(serviceResponse === null){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().CreatedMessage(serviceResponse));
    }
};
const updateAsset = async (req, res, next) => {
    const assetDTO = new AssetDTO(req.body);
    const serviceResponse = await assetsService.updateAsset(assetDTO);

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
const deleteAsset = async (req, res, next) => {
    const { id } = req.params;
    const serviceResponse = await assetsService.deleteAsset(id);

    if(serviceResponse === 404){
        res.json(new ErrorResponse().notFoundError());
    }else{
        res.json(new SuccessResponse().OkMessage(serviceResponse));
    }
};

module.exports = {
    getAllAssets: getAllAssets,
    getAssetById: getAssetById,
    getAssetsByEmployeeId: getAssetsByEmployeeId,
    createAsset: createAsset,
    updateAsset: updateAsset,
    deleteAsset: deleteAsset
}