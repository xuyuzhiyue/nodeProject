var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')
var request = require('request')

const allgoods = require('../public/js/allgoods')
const {  banner3,banner1,banner2 } = require('../public/js/picter')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
})


/* GET home page. */
router.get('/', function (req, res) {
  res.send('首页')
});



/**
 * @api {get}  /allgoods
 * @apiName Goods
 * @apiGroup Goods
 *
 * @apiParam  {String}  cat_name 
 * @apiParam {Number} cat_id 
 * @apiParam {String} cat_pid 
 * @apiParam {String} cat_level 
 * @apiParam {0/1} cat_deleted 
 * @apiParam {String} cat_icon 
 * @apiParam {0/1} isdel 
 * @apiParam {String} cat_type 
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [
 {
            "cat_id": 1,
            "cat_name": "大家电",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [
                {
                    "cat_id": 3,
                    "cat_name": "电视",
                    "cat_pid": 1,
                    "cat_level": 1,
                    "cat_deleted": false,
                    "cat_icon": "/full/none.jpg",
                    "children": [
                        {
                            "cat_id": 1,
                            "cat_name": "曲面电视",
                            "cat_pid": 3,
                            "cat_level": 2,
                            "cat_deleted": 0,
                            "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg",
                            "isdel": 0,
                            "cat_type": "电视"
                        },
                        {
                            "cat_id": 8,
                            "cat_name": "长虹",
                            "cat_pid": 3,
                            "cat_level": 2,
                            "cat_deleted": 0,
                            "cat_icon": "https://api-hmugo-web.itheima.net/full/14291787e1f9f0215816048e813e4ec4fbb3dffe.jpg",
                            "isdel": 0,
                            "cat_type": "电视"
                        }
                    ]
                }
            ]
        }
    ]
}
 */


// 所有商品数据
router.get('/allgoods', function (req, res) {
  allgoods(res)
})
// router.get('/classify', function(req, res) {
//   fs.readFile(path.join(__dirname,'../public/classify.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// });

router.get('/productList', function (req, res) {
  fs.readFile(path.join(__dirname, '../public/productList.json'), (err, data) => {
    if (err) throw err
    res.send(data.toString())
  })
})

// router.get('/rotationChart',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/rotationChart.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })



/**
 * @api {get}  /rotationChart
 * @apiName rotationChart
 * @apiGroup rotationChart
 *
 * @apiParam  {Number}  goods_id 
 * @apiParam {String} image_src 
 * @apiParam {String} opten_type 
 * @apiParam {String} navigator_url 
 * @apiParam {0/1} isdel 
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [{
		"goods_id": 38,
		"image_src": "http://127.0.0.1:8800/rotat/banner3",
		"open_type": "navigate",
		"navigator_url": "/pages/goods_detail/main?goods_id=38",
		"isdel": 0
	}]
}
 */
// 轮播图
router.get('/rotationChart', function (req, res) {
  const sql = 'select * from rotationChart where isdel = 0'
  connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})

// router.get('/Navigation',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/Navigation.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })
/**
 * @api {get}   /navigation
 * @apiName navigation
 * @apiGroup navigation
 *
 * @apiParam  {Number}  id 
 * @apiParam {String} name 
 * @apiParam {0/1} isdel 
 * @apiParam {String} image_src 
 *  @apiParam {String} navigator_url 
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [{
		"id": 1,
		"name": "分类",
		"image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
		"open_type": "switchTab",
		"navigator_url": "/pages/category/main",
		"isdel": 0
	}]
}
 */
router.get('/navigation', function (req, res) {
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

/**
 * @api {get}  /floor
 * @apiName floor
 * @apiGroup floor
 *
 * @apiParam  {Number}  id 
 * @apiParam {String} name 
 * @apiParam {String} open_type 
 *  @apiParam {String} navigator_url 
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [{
      "floor_title": {
			"name": "时尚女装",
			"image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
		},
		"product_list": [{
			"name": "优质服饰",
			"image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
			"open_type": "navigate",
			"navigator_url": "/pages/goods_list?query=服饰"
		}}]
}
 */
router.get('/floor', function (req, res) {
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
        "navigator_url": element.navigator_url
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
        "navigator_url": element.navigator_url
      })
    });
  })
  //       // 获取箱包配饰数据
  const sqlBox = 'select * from floor where isdel = 0 and type = "箱包配饰"'
  connection.query(sqlBox, (err, result) => {

    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    box = []
    result.forEach(element => {
      box.push({
        "name": element.name,
        "image_src": element.image_src,
        "image_width": element.image_width,
        "open_type": element.open_type,
        "navigator_url": element.navigator_url
      })
    });
  })
  let fashionFin = [{
    "floor_title": {
      "name": "时尚女装",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
    },
    "product_list": fashion
  }, {
    "floor_title": {
      "name": "户外活动",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
    },
    "product_list": floor
  }, {
    "floor_title": {
      "name": "箱包配饰",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
    },
    "product_list": box
  }]
  let everyData = {
    "message": fashionFin,
    "meta": {
      "msg": "获取成功",
      "status": 200
    }
  }

  res.send(everyData)
})


// 读取轮播图
router.get('/rotat/banner1', function (req, res) {
  banner1(res)
})
router.get('/rotat/banner2', function (req, res) {
  banner2(res)
})
router.get('/rotat/banner3', function (req, res) {
  banner3(res)
})
module.exports = router;
