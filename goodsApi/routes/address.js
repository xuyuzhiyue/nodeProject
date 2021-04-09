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


//   获取根据登录的用户名name所有的收货地址
router.post('/address/:nickName',(req,res)=>{
  const nickName = req.params.nickName
    const sql = `select * from address where nickName = ${nickName}`
    connection.query(sql,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

//  增加收货地址
  router.post('/addressAdd', (req, res) => {
     console.log(req.body,'req');
     const body = req.body
    const sql = 'insert into address set ?'
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
// router.put('/gouwuche/:nickName/:goods_id/:goods_name', (req, res) => {
//     const goods_id = req.params.goods_id
//     const nickName = req.params.nickName
//     const goods_name = req.params.goods_name
//     const body = req.body
//     console.log(body,goods_id,nickName,goods_name);
//     const sql = 'update gouwuche set ? where goods_id = ? and nickName = ? and goods_name = ?'
//     connection.query(sql,[body,goods_id,nickName,goods_name],(err, result) => {
//       if (err) throw console.log('数据获取失败');
//       if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
//       res.send({
//         err_code: 0,
//         message: '编辑成功'
//       })
//     })
//   })
   
// 删除收获地址
router.delete('/address/:nickName/:id', function (req, res) {
  const nickName = req.params.nickName
  const id = req.params.id
  console.log(nickName,id,'nickName');
const sql = `delete from address where nickName=${nickName} and id=${id} `
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