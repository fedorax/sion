const path = require('path');
const pgsql = require(path.resolve('middleware/pgsql'));

exports.city12h = async function (req, res) {
    const sql = "select * from v_count_city_12h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.json(ret.rows);
};

exports.city24h = async function (req, res) {
    const sql = "select * from v_count_city_24h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.json(ret.rows);
};

exports.city1h = async function (req, res) {
    const sql = "select * from v_count_city_1h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.json(ret.rows);
};

exports.city1w = async function (req, res) {
    const sql = "select * from v_count_city_1w";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.json(ret.rows);
};

exports.city1m = async function (req, res) {
    const sql = "select * from v_count_city_1m";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.json(ret.rows);
};
