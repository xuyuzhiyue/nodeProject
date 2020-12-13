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

  
//   获取所有的商品信息
router.get('/goodsDetail',(req,res)=>{
    connection.query(sql,id, (err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })


  //   根据good_Type和cat_type获取所有的商品信息
router.get('/goodsDetail2',(req,res)=>{
    const goodsType = req.body.goodsType
    const cat_type = req.body.cat_type
    const pagenum =  req.body.pagenum*1 - 1
    const pagesize =  req.body.pagesize*1
    const sql = 'select * from goodsdetail where isdel = 0 and goodsType = ? and cat_type = ? limit ?,?'
    connection.query(sql,[goodsType,cat_type,pagenum,pagesize],(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
})
module.exports = router;