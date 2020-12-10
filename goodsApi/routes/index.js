var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')

const allgoods = require('../public/js/allgoods')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
})


/* GET home page. */
router.get('/', function(req, res) {
   res.send('首页')
});


// 所有商品数据
router.get('/allgoods',function(req,res){
  allgoods(res)
})
// router.get('/classify', function(req, res) {
//   fs.readFile(path.join(__dirname,'../public/classify.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// });

router.get('/productList',function(req,res){
  fs.readFile(path.join(__dirname,'../public/productList.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
})

// router.get('/rotationChart',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/rotationChart.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })
// 轮播图
router.get('/rotationChart',function(req,res){
   const sql = 'select * from rotationChart where isdel = 0'
   connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})

// 导航
// router.get('/Navigation',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/Navigation.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })
router.get('/navigation',function(req,res){
  const sql = 'select * from navigation where isdel = 0'
  connection.query(sql, (err, result) => {
   if (err) throw res.send({ err_code: 1, message: '数据不存在' });
   res.send({
     err_code: 0,
     message: result
   })
 })
})


// 楼层
// router.get('/floor',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/floor.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })

let fashion = []
let floor = []
let box = []


router.get('/floor',function(req,res){
  // location.reload()
  // 获取时尚女装数据
  const sqlFashion = 'select * from floor where isdel = 0 and type = "时尚女装"'
  connection.query(sqlFashion, (err, result) => {
   if (err) throw res.send({ err_code: 1, message: '数据不存在' });
     fashion = []
     result.forEach(element => {
       fashion.push({
        "name": element.name,
        "image_src": element.image_src,
        "image_width": element.image_width,
        "open_type": element.open_type,
        "navigator_url":element.navigator_url
       })
     });
    })
  // res.send(fashion)
    // 获取户外活动数据
    const sqlFloor = 'select * from floor where isdel = 0 and type = "户外活动"'
    connection.query(sqlFloor, (err, result) => {
     
     if (err) throw res.send({ err_code: 1, message: '数据不存在' });
     floor = []
       result.forEach(element => {
        floor.push({
          "name": element.name,
          "image_src": element.image_src,
          "image_width": element.image_width,
          "open_type": element.open_type,
          "navigator_url":element.navigator_url
         })
       });
      })
    //       // 获取箱包配饰数据
    const sqlBox = 'select * from floor where isdel = 0 and type = "箱包配饰"'
    connection.query(sqlBox, (err, result) => {
     
     if (err) throw res.send({ err_code: 1, message: '数据不存在' });
     box =[]
       result.forEach(element => {
        box.push({
          "name": element.name,
          "image_src": element.image_src,
          "image_width": element.image_width,
          "open_type": element.open_type,
          "navigator_url":element.navigator_url
         })
       });
      })
      let fashionFin = [{
        "floor_title": {
          "name": "时尚女装",
          "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
        },
        "product_list":fashion
       },{
        "floor_title": {
          "name": "户外活动",
          "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
        },
        "product_list":floor
       },{
        "floor_title": {
          "name": "箱包配饰",
          "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
        },
        "product_list":box
       }]
      let everyData ={
        "message":fashionFin,
        "meta": {
          "msg": "获取成功",
          "status": 200
        }
      }
  
  res.send(everyData)
})

module.exports = router;
