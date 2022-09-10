const path = require('path');
const moment = require('moment');
const pgsql = require(path.resolve('middleware/pgsql'));

exports.recent = async function (req, res) {
    const sql = "select date from data order by date desc limit 1";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();


    res.send(moment(ret.rows[0].date).format("YYYY-MM-DD HH:mm:ss"));
};

exports.last = async function (req, res) {
    const sql = "select date from data order by date asc limit 1";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.send(moment(ret.rows[0].date).format("YYYY-MM-DD HH:mm:ss"))
};

exports.top10 = async function (req, res) {
    const sql = "select date from data order by date desc limit 10";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.json(ret.rows.map(function (row) {
        return moment(row.date).format("YYYY-MM-DD HH:mm:ss");
    }));
};