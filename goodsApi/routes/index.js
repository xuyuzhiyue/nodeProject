var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')
var request = require('request')

const allgoods = require('../public/js/allgoods')
const { banner3, banner1, banner2, icon_index_nav1, icon_index_nav2, icon_index_nav3, icon_index_nav4,
  pic_floor1, pic_floor2, pic_floor3, pic_floor4, pic_floor5, pic_floor6, pic_floor7, pic_floor8, pic_floor9,
  pic_floor10, pic_floor11, pic_floor12, pic_floor13, pic_floor14, pic_floor15
} = require('../public/js/picter')

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

// 查询所有商品类型数据
router.get('/allgoodsType', function (req, res) {
  const sql = 'select * from allgoods where isdel = 0'
  connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})
// 删除所有商品类型数据
router.delete('/allgoodsType/:id', function (req, res) {
  const id = req.params.id
  const sql = 'update allgoods set isdel = 1 where cat_id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})

// 添加所有商品类型数据
router.post('/allgoodsType', function (req, res) {
  const body = req.body
  const sql = 'insert into allgoods set ?'
  connection.query(sql, body, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})

// router.get('/classify', function(req, res) {
//   fs.readFile(path.join(__dirname,'../public/classify.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// });

// router.get('/productList', function (req, res) {
//   fs.readFile(path.join(__dirname, '../public/productList.json'), (err, data) => {
//     if (err) throw err
//     res.send(data.toString())
//   })
// })

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
// 查询轮播图
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

// 删除轮播图
router.delete('/rotationChart/:id', function (req, res) {
    const id = req.params.id
  const sql = 'update rotationChart set isdel = 1 where goods_id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})
// 添加轮播图
router.post('/rotationChart', function (req, res) {
  const body = req.body
  const sql = 'insert into rotationChart set ?'
    connection.query(sql,body, (err, result) => {
      if(err) {
        res.send({
          err_code: 0,
          message: '添加失败'
        })
      }else{
        res.send({
          err_code: 0,
          message: '添加成功'
        })
      }
  })
})

 //   修改轮播图
 router.put('/rotationChart/:goods_id', (req, res) => {
  const goods_id = req.params.goods_id
  const body = req.body
  console.log(body,goods_id);
  const sql = 'update rotationChart set ? where goods_id = ?'
  connection.query(sql,[body,goods_id],(err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
    res.send({
      err_code: 0,
      message: '编辑成功'
    })
  })
})
// router.delete('/users/:id', (req, res) => {
//   const id = req.params.id
//   const sql = 'update user set isdel = 1 where id = ?'
//   connection.query(sql, id, (err, result) => {
//     if (err) throw console.log('数据获取失败');
//     if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
//     res.send({
//       err_code: 0,
//       message: '删除成功'
//     })
//   })
// })


// 查询综合商品总数
router.get('/comprehensive', function (req, res) {
  const sql = 'select * from comprehensive where isdel = 0'
  connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})
// 删除综合商品总数
router.delete('/comprehensive/:id', function (req, res) {
  const id = req.params.id
  const sql = 'update comprehensive set isdel = 1 where goods_id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})
// 增加综合商品
router.post('/comprehensive', function (req, res) {
  const body = req.body
  const sql = 'insert into comprehensive set ?'
    connection.query(sql,body, (err, result) => {
      if(err) {
        res.send({
          err_code: 0,
          message: '添加失败'
        })
      }else{
        res.send({
          err_code: 0,
          message: '添加成功'
        })
      }
  })
})
// 综合商品根据hot_number进行排序
router.get('/comprehensiveOrderBy', function (req, res) {
  const sql = 'select * from comprehensive where isdel = 0 ORDER BY hot_number DESC'
  connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '数据不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})

 //   修改综合商品
 router.put('/comprehensive/:goods_id', (req, res) => {
  const goods_id = req.params.goods_id
  const body = req.body
  console.log(body,goods_id);
  const sql = 'update comprehensive set ? where goods_id = ?'
  connection.query(sql,[body,goods_id],(err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
    res.send({
      err_code: 0,
      message: '编辑成功'
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
// router.get('/navigation', function (req, res) {
//   const sql = 'select * from navigation where isdel = 0'
//   connection.query(sql, (err, result) => {
//     if (err) throw res.send({ err_code: 1, message: '数据不存在' });
//     res.send({
//       err_code: 0,
//       message: result
//     })
//   })
// })


// 楼层
// router.get('/floor',function(req,res){
//   fs.readFile(path.join(__dirname,'../public/floor.json'),(err,data) =>{
//     if(err) throw err
//     res.send(data.toString())
//   })
// })

// let fashion = []
// let floor = []
// let box = []

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
// router.get('/floor', function (req, res) {
  // location.reload()
  // 获取时尚女装数据
  // const sqlFashion = 'select * from floor where isdel = 0 and type = "时尚女装"'
  // connection.query(sqlFashion, (err, result) => {
  //   if (err) throw res.send({ err_code: 1, message: '数据不存在' });
  //   fashion = []
  //   result.forEach(element => {
  //     fashion.push({
  //       "name": element.name,
  //       "image_src": element.image_src,
  //       "image_width": element.image_width,
  //       "open_type": element.open_type,
  //       "navigator_url": element.navigator_url
  //     })
  //   });
  // })
  // res.send(fashion)
  // 获取户外活动数据
  // const sqlFloor = 'select * from floor where isdel = 0 and type = "户外活动"'
  // connection.query(sqlFloor, (err, result) => {

  //   if (err) throw res.send({ err_code: 1, message: '数据不存在' });
  //   floor = []
  //   result.forEach(element => {
  //     floor.push({
  //       "name": element.name,
  //       "image_src": element.image_src,
  //       "image_width": element.image_width,
  //       "open_type": element.open_type,
  //       "navigator_url": element.navigator_url
  //     })
  //   });
  // })
  //       // 获取箱包配饰数据
//   const sqlBox = 'select * from floor where isdel = 0 and type = "箱包配饰"'
//   connection.query(sqlBox, (err, result) => {

//     if (err) throw res.send({ err_code: 1, message: '数据不存在' });
//     box = []
//     result.forEach(element => {
//       box.push({
//         "name": element.name,
//         "image_src": element.image_src,
//         "image_width": element.image_width,
//         "open_type": element.open_type,
//         "navigator_url": element.navigator_url
//       })
//     });
//   })
//   let fashionFin = [{
//     "floor_title": {
//       "name": "时尚女装",
//       "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
//     },
//     "product_list": fashion
//   }, {
//     "floor_title": {
//       "name": "户外活动",
//       "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
//     },
//     "product_list": floor
//   }, {
//     "floor_title": {
//       "name": "箱包配饰",
//       "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
//     },
//     "product_list": box
//   }]
//   let everyData = {
//     "message": fashionFin,
//     "meta": {
//       "msg": "获取成功",
//       "status": 200
//     }
//   }

//   res.send(everyData)
// })


// 读取navigation 导航
// router.get('/navigation/icon_index_nav1', function (req, res) {
//   icon_index_nav1(res)
// })
// router.get('/navigation/icon_index_nav2', function (req, res) {
//   icon_index_nav2(res)
// })
// router.get('/navigation/icon_index_nav3', function (req, res) {
//   icon_index_nav3(res)
// })
// router.get('/navigation/icon_index_nav4', function (req, res) {
//   icon_index_nav4(res)
// })
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
// // 读取floor 楼层
// router.get('/floor/pic_floor1', function (req, res) {
//   pic_floor1(res)
// })
// router.get('/floor/pic_floor2', function (req, res) {
//   pic_floor2(res)
// })
// router.get('/floor/pic_floor3', function (req, res) {
//   pic_floor3(res)
// })
// router.get('/floor/pic_floor4', function (req, res) {
//   pic_floor4(res)
// })
// router.get('/floor/pic_floor5', function (req, res) {
//   pic_floor5(res)
// })
// router.get('/floor/pic_floor6', function (req, res) {
//   pic_floor6(res)
// })
// router.get('/floor/pic_floor7', function (req, res) {
//   pic_floor7(res)
// })
// router.get('/floor/pic_floor8', function (req, res) {
//   pic_floor8(res)
// })
// router.get('/floor/pic_floor9', function (req, res) {
//   pic_floor9(res)
// })
// router.get('/floor/pic_floor10', function (req, res) {
//   pic_floor10(res)
// })
// router.get('/floor/pic_floor11', function (req, res) {
//   pic_floor11(res)
// })
// router.get('/floor/pic_floor12', function (req, res) {
//   pic_floor12(res)
// })
// router.get('/floor/pic_floor13', function (req, res) {
//   pic_floor13(res)
// })
// router.get('/floor/pic_floor14', function (req, res) {
//   pic_floor14(res)
// })
// router.get('/floor/pic_floor15', function (req, res) {
//   pic_floor15(res)
// })

module.exports = router;
