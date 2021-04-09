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


//   获取根据登录的用户名name所有的收藏信息
router.post('/gouwucheget/:nickName',(req,res)=>{
  const nickName = req.params.nickName
    const sql = `select * from gouwuche where nickName = ${nickName}`
    connection.query(sql,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

//   //   获取增加购物车
 router.post('/gouwuche', (req, res) => {
   const body = req.body
   console.log(body,'req');
  const sql = 'insert into gouwuche set ?'
  connection.query(sql, body, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})

// 修改
router.put('/gouwuche/:nickName/:goods_id/:goods_name', (req, res) => {
    const goods_id = req.params.goods_id
    const nickName = req.params.nickName
    const goods_name = req.params.goods_name
    const body = req.body
    console.log(body,goods_id,nickName,goods_name);
    const sql = 'update gouwuche set ? where goods_id = ? and nickName = ? and goods_name = ?'
    connection.query(sql,[body,goods_id,nickName,goods_name],(err, result) => {
      if (err) throw console.log('数据获取失败');
      if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
      res.send({
        err_code: 0,
        message: '编辑成功'
      })
    })
  })
  
// 删除购物车
router.delete('/gouwuche/:nickName/:goods_id/:goods_name', function (req, res) {
  const nickName = req.params.nickName
  const goods_id = req.params.goods_id
  const goods_name = req.params.goods_name
  // console.log(nickName,goods_id,goods_name,'删除收藏');
const sql = `delete from gouwuche where nickName= '${nickName}' and goods_id= ${goods_id} and goods_name = '${goods_name}' `
connection.query(sql, (err, result) => {
  if (err) throw console.log('数据获取失败');
  if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的收藏失败' });
  res.send({
    err_code: 0,
    message: '删除成功'
  })
})
})
module.exports = router;