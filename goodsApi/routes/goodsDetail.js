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
  const sql = 'select * from goodsdetail where isdel = 0 '
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
    console.log(pagenum);
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