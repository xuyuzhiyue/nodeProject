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


//   获取根据登录的用户名name所有的订单信息
router.post('/ordercheck',(req,res)=>{
  const name = req.body.name
  console.log(req.body);
    const sql = `select * from orders where isdel = 0 and name = ${name}`
    connection.query(sql,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

  //   获取增加订单信息
 router.post('/order', (req, res) => {
  //  console.log(req,'req');
   const body = req.body
  const sql = 'insert into orders set ?'
  connection.query(sql, body, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})
module.exports = router;