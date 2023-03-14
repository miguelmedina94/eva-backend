const connection = require('../config/db-config');

const findAllAssets = async () => {
    const rows = await connection.query("SELECT * FROM assets a").spread((rows) => rows);
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
    console.log(values);
    const { 
        name,
        type,
        code,
        description,
        purchase_date,
        employee_id 
    } = values;

    const result = await connection.query("INSERT INTO assets (name, type, code, description, purchase_date, employee_id) values (?, ?, ?, ?, ?, ?)", 
    [name,
    type,
    code,
    description,
    purchase_date,
    employee_id
    ]);

    return result[0].insertId;
};
const updateAsset = async (asset, id) => {
    const { first_name, last_name, cuit, team_id, join_date, rol} = asset;
    const result = await connection.query("UPDATE assets SET first_name=?, last_name=?, cuit=?, team_id=?, join_date=?, rol=? WHERE id=?",
    [
        first_name,
        last_name,
        cuit,
        team_id,
        join_date,
        rol,
        id
    ]);
    return result[0].affectedRows;
};
const deleteAsset = async (id) => {
    const result = await connection.query(`DELETE FROM assets WHERE id = ${id}`);
    return result[0].affectedRows;
};

const deleteAssetByEmployeeId = async (id) => {
    const result = await connection.query(`DELETE FROM assets WHERE employee_id = ${id}`);
    return result[0].affectedRows;
};

module.exports = {
    findAllAssets: findAllAssets,
    findAssetById: findAssetById,
    findAssetByEmployeeId: findAssetByEmployeeId,
    createAsset: createAsset,
    updateAsset: updateAsset,
    deleteAsset: deleteAsset,
    deleteAssetByEmployeeId: deleteAssetByEmployeeId
}