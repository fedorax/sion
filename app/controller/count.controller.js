const path = require('path');
const pgsql = require(path.resolve('middleware/pgsql'));

exports.latest24h = async function (req, res) {
    const sql = "select count(newsid) from v_latest_24h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.send(ret.rows[0]);
};

exports.latest12h = async function (req, res) {
    const sql = "select count(newsid) from v_latest_12h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.send(ret.rows[0]);
};

exports.latest1h = async function (req, res) {
    const sql = "select count(newsid) from v_latest_1h";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.send(ret.rows[0]);
};