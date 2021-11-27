var express = require('express');
var router = express.Router();

const pool = require('../config/DatabaseConfig');

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'node-dsu-velog' });
    /* try {
        pool.getConnection((err, con) => {
            if (err) {
                console.log(err);
                throw err.message;
            }

            const query = 'SELECT * FROM t_user;';

            con.query(query, (err, rows) => {
                if (err) {
                    console.log(err);
                    throw err.message;
                }

                con.release;

                res.status(200).json({
                    status: 200,
                    data: rows,
                    message: 'Success',
                });
            });
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error,
        });
    } */
});

module.exports = router;
