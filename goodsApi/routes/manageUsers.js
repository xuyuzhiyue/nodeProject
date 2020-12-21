var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')
var request = require('request')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
  })

  // 根据name和password获取管理员信息,用于管理后台数据
  router.get('/manageUsers', (req, res) => {
    const sql = 'select * from manageuser where isdel = 0'
    connection.query(sql, (err, result) => {
      // console.log(res);
      if (err) throw res.send({ err_code: 1, message: '该管理员不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

// 根据name和password获取管理员信息,用于管理后台数据
  router.post('/manageUsers', (req, res) => {
    const userName = req.body.userName
    const userPassword = req.body.userPassword
    const sql = 'select * from manageuser where isdel = 0 and userName = ? and userPassword = ?'
    connection.query(sql, [userName,userPassword],(err, result) => {
      if (err) throw res.send({ err_code: 0, message: '该管理员不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })
module.exports = router;