const mysql = require('../utils/mysqlConfig')

const userInfo = async (req, res, next) => {
    let userId = req.query.id || '*'
    var sql = `SELECT * FROM users where users.userId = ${userId}`;
    console.log(sql)
    mysql.query(sql, (err, result) => {
        console.log(res);
        
        if (err) {
            console.log('[SELECT ERROR]:', err.message);
        }
        res.json({
            code: 200,
            data: result
        })
    });
}

const register = async (req, res, next) => {
    var params = {
        userId: null,
        userName: '张三',
        sex: 1,
        phone: '19920181234'
    }
    var sql = `INSERT INTO users set ?`;
    mysql.query(sql, params, (err, result) => {
        if (!err) {
            res.json({
                code: 200,
                data: result
            })
        } else {
            res.json({
                code: 500,
                data: err
            })
            console.log('[SELECT ERROR]:', err.message);
        }

    });
}
module.exports = {
    register,
    userInfo
}