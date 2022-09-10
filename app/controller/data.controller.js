const path = require('path');
const pgsql = require(path.resolve('middleware/pgsql'));

exports.all = async function (req, res) {
    const sql = "select * from data";
    await pgsql.connect();
    const ret = await pgsql.query(sql);
    await pgsql.close();
    res.json(ret.rows);
};