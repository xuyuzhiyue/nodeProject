var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')
var request = require('request')
const session = require('express-session');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
  })

  // 根据name和password获取管理员信息,用于管理后台数据
  router.get('/manageUsers', (req, res) => {
    // const sql = 'select * from manageuser where isdel = 0'
    const sql = 'select * from manageuser'
    connection.query(sql, (err, result) => {
      // console.log(res);
      if (err) throw res.send({ err_code: 1, message: '该管理员不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

  // 注销账户
  router.put('/manageUsers/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    const sql = 'update manageuser set ? where id = ?'
    connection.query(sql, [body,id],(err, result) => {
      if (err) throw console.log('数据获取失败');
      if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
      res.send({
        err_code: 0,
        message: '编辑成功'
      })
    })
  })


// 根据name和password获取管理员信息,用于管理后台数据
  router.post('/manageUsers',(req, res) => {
    const userName = req.body.userName
    const userPassword = req.body.userPassword
    req.session.userName = req.body.userName
    req.session.userPassword = req.body.userPassword
    const sql = 'select * from manageuser where isdel = 0 and userName = ? and userPassword = ?'
    connection.query(sql, [userName,userPassword],(err, result) => {
      if (err) throw res.send({ err_code: 0, message: '该管理员不存在' });
      res.send({
        err_code: 0,
        message: result,
        session:req.session
      })
    })
  })


//   // 销毁i
// router.get('/exitSession',(req,res)=>{
//   req.session.destroy(()=>{
//     console.log("销毁成功");
//   })
//   res.send("成功退出")
// })
module.exports = router;