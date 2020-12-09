let express = require('express');
let router = express.Router();
let mysql = require('mysql')
let moment = require('moment')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('express server')
});

// 获取所有的用户信息
/**
 * @api {get} /users 1.1获取所有的用户信息
 * @apiName User
 * @apiGroup User
 *
 * @apiParam {null} null null
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [
        {
            "id": 1,
            "username": "zhansan",
            "age": 18,
            "isdel": 0,
            "ctime": "2020-10-10"
        }
    ]
}
 */
router.get('/users', (req, res) => {
  const sql = 'select * from user where isdel = 0'
  connection.query(sql, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '查找用户不存在' });
    res.send({
      err_code: 0,
      message: result
    })
  })
})

// 根据id获取用户信息

/**
 * @api {get} /users/:id  1.2根据id获取用户信息
 * @apiName user
 * @apiGroup User
 *
 * @apiParam {Number} id 根据id获取用户的信息
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": [
        {
            "id": 1,
            "username": "zhansan",
            "age": 18,
            "isdel": 0,
            "ctime": "2020-10-10"
        }
    ]
}
 */

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  const sql = 'select * from user where isdel = 0 and id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw res.send({ err_code: 1, message: '查找用户不存在' });
    if (result.length === 0) return console.log('查找的用户不存在');
    res.send({
      err_code: 0,
      message: result
    })
  })
})

// 添加用户信息
/**
 * @api {post} /users 1.3添加用户信息
 * @apiName addUser
 * @apiGroup User
 *
 * @apiParam {string} username 添加的用户名
 * @apiParam {Number} age 添加的年龄
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": '添加成功'
}
 */
router.post('/users', (req, res) => {
  const body = req.body
  body.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
  const sql = 'insert into user set ?'
  connection.query(sql, body, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '添加失败' });
    res.send({
      err_code: 0,
      message: '添加成功'
    })
  })
})


// 根据id编辑用户信息
/**
 * @api {put} /users/:id 1.4根据id编辑用户信息
 * @apiName updateUser
 * @apiGroup User
 *
 * @apiParam {Number} id 根据id编辑用户信息
 * @apiParam {string} username 添加的用户名
 * @apiParam {Number} age 添加的年龄
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": '编辑成功'
}
 */
router.put('/users/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  body.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
  const sql = 'update user set ? where id = ?'
  connection.query(sql, [body, id], (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '编辑的用户失败' });
    res.send({
      err_code: 0,
      message: '编辑成功'
    })
  })
})


// 根据id删除用户信息
/**
 * @api {delete} /users/:id 1.5根据id删除用户信息
 * @apiName deleteUsers
 * @apiGroup User
 *
 * @apiParam {Number} id 根据id删除用户信息
 *
* @apiSuccessExample {json} Success-Response:
{
    "err_code": 0,
    "message": '删除成功'
}
 */
router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  const sql = 'update user set isdel = 1 where id = ?'
  connection.query(sql, id, (err, result) => {
    if (err) throw console.log('数据获取失败');
    if (result.affectedRows < 1) return res.send({ err_code: 1, message: '删除的用户失败' });
    res.send({
      err_code: 0,
      message: '删除成功'
    })
  })
})


module.exports = router;
