const { Pool } = require('pg');
const dbConfig = require('../config/db');

const pool = new Pool(dbConfig);
let client;

exports.connect = async function () {
    client = await pool.connect();
}

exports.query = async function (sql) {
    return await client.query(sql);
};

exports.close = async function () {
    await client.release();
}