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


// //   获取所有的留言信息
router.get('/liuyan',(req,res)=>{
    const sql = `select * from liuyan`
    connection.query(sql,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  })

  //   获取增加留言
 router.post('/liuyan', (req, res) => {
  //  console.log(req,'req');
   const body = req.body
  const sql = 'insert into liuyan set ?'
  connection.query(sql, body, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})

// 删除收藏
// router.delete('/collects/:nickName/:goods_id', function (req, res) {
//   const nickName = req.params.nickName
//   const goods_id = req.params.goods_id
// const sql = `delete from collectshop where nickName= ${nickName} and goods_id= ${goods_id}`
// connection.query(sql, (err, result) => {
//   if (err) throw console.log('数据获取失败');
//   if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的收藏失败' });
//   res.send({
//     err_code: 0,
//     message: '删除成功'
//   })
// })
// })

// 删除留言
router.put('/liuyan/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  const sql = 'update liuyan set ? where id = ?'
  connection.query(sql, [body,id],(err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})
module.exports = router;