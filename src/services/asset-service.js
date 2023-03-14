const assetModel = require('../models/asset-model');

class AssetsService {
    static async findAllAssets () {
        const modelResponse = await assetModel.findAllAssets();
        return modelResponse.length > 0 ? modelResponse : null;
    }

    static async findAssetById (id) {
        const modelResponse = await assetModel.findAssetById(id);
        return modelResponse.length > 0 ? modelResponse[0] : null;
    }

    static async findAssetByEmployeeId (id) {
        const modelResponse = await assetModel.findAssetByEmployeeId(id);
        return modelResponse.length > 0 ? modelResponse : null;
    }

    static async createAsset (asset) {
        const modelResponse = await assetModel.createAsset(asset);
        return modelResponse ? modelResponse : null;
    }

    static async updateAsset (asset, id) {
        const findResponse = await this.findAssetById (id);
        if(findResponse){
            const updateResponse = await assetModel.updateAsset(asset,id);
            return updateResponse ? {afectedRows: updateResponse} : 400;
        }else{
            return 404;
        }
    }

    static async deleteAsset (id) {
        const findResponse = await this.findAssetById(id);
        if(findResponse){
            const deleteResponse = await assetModel.deleteAsset(id);
            return deleteResponse ? {afectedRows: deleteResponse} : 400;
        }else{
            return 404;
        }
    }
}

module.exports = AssetsService;