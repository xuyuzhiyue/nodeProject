var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')


// 读取轮播图
function banner(res,pictPath){
    fs.readFile(path.join(__dirname, pictPath), function (err, data) {
        if (err) {
            return err
        } else {
            res.writeHeader(200, { 'Content-Type': 'image/jpeg' })
            res.end(data);
        }
    })
}
function banner3(res) {
    banner(res, '../images/banner3.png')
}
function banner2(res) {
    banner(res, '../images/banner2.png')
}
function banner1(res) {
    banner(res, '../images/banner1.png')
}

module.exports = { banner3,banner1,banner2 }
