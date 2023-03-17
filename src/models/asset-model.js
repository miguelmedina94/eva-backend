const connection = require('../config/db-config');

const findAllAssets = async (whereQuery) => {
    const completeQuery = `SELECT * FROM assets a WHERE 1${whereQuery}`;
    const rows = await connection.query(completeQuery).spread((rows) => rows);
    return rows;
};

const findAssetById = async (id) => {
    const row = await connection.query(`SELECT * FROM assets a WHERE id = ${id}`).spread((rows) => rows);
    return row;
};

const findAssetByEmployeeId = async (id) => {
    const row = await connection.query(`SELECT * FROM assets a WHERE employee_id = ${id}`).spread((rows) => rows);
    return row;
};

const createAsset = async (values) => {
    const { 
        name,
        type,
        code,
        description,
        purchase_date,
        employee_id 
    } = values;
    const result = await connection.query("INSERT INTO assets (name, type, code, description, purchase_date, employee_id) values (?, ?, ?, ?, ?, ?)", 
    [
        name,
        type,
        code,
        description,
        purchase_date,
        employee_id
    ]);
    return result[0].insertId;
};

const updateAsset = async (asset, id) => {
    const { name, type, code, description, purchase_date, employee_id} = asset;
    const result = await connection.query("UPDATE assets SET name=?, type=?, code=?, description=?, purchase_date=?, employee_id=? WHERE id=?",
    [
        name,
        type,
        code,
        description,
        purchase_date,
        employee_id,
        id
    ]);
    return result[0].affectedRows;
};

const deleteAsset = async (id) => {
    const result = await connection.query(`DELETE FROM assets WHERE id = ${id}`);
    return result[0].affectedRows;
};

const unlinkAssetByEmployeeId = async (id) => {
    const result = await connection.query(`UPDATE assets SET employee_id=null WHERE employee_id = ${id}`);
    return result[0].affectedRows;
};

module.exports = {
    findAllAssets,
    findAssetById,
    findAssetByEmployeeId,
    createAsset,
    updateAsset,
    deleteAsset,
    unlinkAssetByEmployeeId
};