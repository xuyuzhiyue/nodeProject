"use strict";

var express = require('express');

var router = express.Router();

var fs = require('fs');

var path = require('path');

var mysql = require('mysql');

var request = require('request');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
}); //   获取所有的商品信息

router.get('/goodsDetail', function (req, res) {
  var sql = 'select * from goodsdetail where isdel = 0 ';
  connection.query(sql, function (err, result) {
    if (err) throw res.send({
      err_code: 1,
      message: '该数据不存在'
    });
    res.send({
      err_code: 0,
      message: result
    });
  });
}); //   根据good_Type和cat_type获取所有的商品信息

router.post('/goodsDetail2', function (req, res) {
  var goodsType = req.body.goodsType;
  var cat_type = req.body.cat_type;
  var pagenum = req.body.pagenum * 1 - 1;
  var pagesize = req.body.pagesize * 1; // var connection = mysql.createConnection({multipleStatements: true});

  var sql2 = 'select * from goodsdetail where isdel = 0 and goodsType = ? and cat_type = ? limit ?,?'; // 获取总条数

  var sql = 'select count(*) as total from goodsdetail where isdel = 0 and goodsType = ? and cat_type = ? limit ?,?'; // const sql = `select * from goodsdetail where isdel = 0 and goodsType = "${goodsType}" and cat_type = "${cat_type}" limit ${pagenum},${pagesize}`

  connection.query(sql, [goodsType, cat_type, pagenum, pagesize], function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      connection.query(sql2, [goodsType, cat_type, pagenum, pagesize], function (err2, result2) {
        if (err2) throw err2;
        res.send({
          err_code: 0,
          message: {
            goods: result2,
            total: result[0].total
          }
        });
      });
    }
  });
});
module.exports = router;