var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')
var request = require('request')
let moment = require('moment')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
  })

//   获取所有的商品信息
router.get('/goodsDetail',(req,res)=>{
  const sql = 'select * from goodsdetail where isdel = 0 '
  connection.query(sql,(err, result) => {
    if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})


 //   根据id删除商品信息
 router.delete('/goodsDetail/:id', (req, res) => {
  const id = req.params.id
  const sql = 'update goodsdetail set isdel = 1 where goods_id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})

 //   增加商品信息
router.post('/goodsDetail', (req, res) => {
  const body = req.body
  const sql = 'insert into goodsdetail set ?'
  connection.query(sql, body, (err, result) => {
    console.log(result);
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})


 //   修改商品信息
 router.put('/goodsDetail/:goods_id', (req, res) => {
  const goods_id = req.params.goods_id
  const body = req.body
  console.log(body,goods_id);
  const sql = 'update goodsdetail set ? where goods_id = ?'
  connection.query(sql,[body,goods_id],(err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
    res.send({
      err_code: 0,
      message: '编辑成功'
    })
  })
})
  
  //   获取字段goodsType对的商品名字信息进行搜索
router.post('/SearchGoodsType',(req,res)=>{
  const goodsType = req.body.goodsType
  const startTime = req.body.startTime
  const endTime =  req.body.endTime
  if(startTime === undefined && endTime === undefined){
    const sqlType = `select * from goodsdetail where isdel = 0 and goodsType = '${goodsType}' ;`
    console.log(sqlType);
    connection.query(sqlType,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  }else{
    const sqlTime = `select * from goodsdetail where isdel = 0 and goodsType = '${goodsType}' and add_time Between '${startTime}' And '${endTime}';`
    console.log(sqlTime);
    connection.query(sqlTime,(err, result) => {
      if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
      res.send({
        err_code: 0,
        message: result
      })
    })
  }

})


 //   获取字段goods_name对的商品名字信息进行搜索
 router.post('/dateSearch',(req,res)=>{
  const startTime = req.body.startTime
  const endTime =  req.body.endTime
  const sql = `select * from goodsdetail where isdel = 0 and  add_time Between '${startTime}' And '${endTime}';`
  console.log(sql);
  connection.query(sql,(err, result) => {
    if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
}) 



  // ---小程序

 //   获取字段goods_name对的商品名字信息进行搜索
router.post('/goodsDetailSearch',(req,res)=>{
  const goods_name = req.body.goods_name
  const sql = `select * from goodsdetail where isdel = 0 and goods_name like '%${goods_name}%'`
  console.log(sql);
  connection.query(sql,(err, result) => {
    if (err) throw res.send({ err_code: 1, message: '该数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
  }) 

  //   根据good_Type和cat_type获取所有的商品信息
router.post('/goodsDetail2',(req,res)=>{
    const goodsType = req.body.goodsType
    const cat_type = req.body.cat_type
    const pagesize =  req.body.pagesize*1
    
    const pagenum =  (req.body.pagenum*1 - 1) * pagesize
    // console.log(pagenum);
    const sql2 = 'select * from goodsdetail where isdel = 0 and goodsType = ? and cat_type = ? limit ?,?'
    // 获取总条数
    const sql = 'select count(*) as total from goodsdetail where isdel = 0 and goodsType = ? and cat_type = ?'
    // const sql = `select * from goodsdetail where isdel = 0 and goodsType = "${goodsType}" and cat_type = "${cat_type}" limit ${pagenum},${pagesize}`
    connection.query(sql,[goodsType,cat_type,pagenum,pagesize],(err, result) => {
      if (err) {
        throw err
      }else{
        // console.log(result);
        connection.query(sql2,[goodsType,cat_type,pagenum,pagesize],(err2, result2)=>{
          if(err2)throw err
          res.send({
            err_code: 0,
            message: {
              goods:result2,
              total:result[0].total
            }
          })
        })
      }
    })
})
module.exports = router;