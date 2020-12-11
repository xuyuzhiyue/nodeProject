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


// 读取navigation 导航
function icon_index_nav(res,pictPath){
    fs.readFile(path.join(__dirname, pictPath), function (err, data) {
        if (err) {
            return err
        } else {
            res.writeHeader(200, { 'Content-Type': 'image/jpeg' })
            res.end(data);
        }
    })
}
function icon_index_nav1(res) {
    icon_index_nav(res, '../images/icon_index_nav1.png')
}
function icon_index_nav2(res) {
    icon_index_nav(res, '../images/icon_index_nav2.png')
}
function icon_index_nav3(res) {
    icon_index_nav(res, '../images/icon_index_nav3.png')
}
function icon_index_nav4(res) {
    icon_index_nav(res, '../images/icon_index_nav4.png')
}


// / 读取floor 楼层
function pic_floor(res,pictPath){
    fs.readFile(path.join(__dirname, pictPath), function (err, data) {
        if (err) {
            return err
        } else {
            res.writeHeader(200, { 'Content-Type': 'image/jpeg' })
            res.end(data);
        }
    })
}
function pic_floor1(res) {
    pic_floor(res, '../images/pic_floor1.png')
}
function pic_floor2(res) {
    pic_floor(res, '../images/pic_floor2.png')
}
function pic_floor3(res) {
    pic_floor(res, '../images/pic_floor3.png')
}
function pic_floor4(res) {
    pic_floor(res, '../images/pic_floor4.png')
}
function pic_floor5(res) {
    pic_floor(res, '../images/pic_floor5.png')
}
function pic_floor6(res) {
    pic_floor(res, '../images/pic_floor6.png')
}
function pic_floor7(res) {
    pic_floor(res, '../images/pic_floor7.png')
}
function pic_floor8(res) {
    pic_floor(res, '../images/pic_floor8.png')
}
function pic_floor9(res) {
    pic_floor(res, '../images/pic_floor9.png')
}
function pic_floor10(res) {
    pic_floor(res, '../images/pic_floor10.png')
}
function pic_floor11(res) {
    pic_floor(res, '../images/pic_floor11.png')
}
function pic_floor12(res) {
    pic_floor(res, '../images/pic_floor12.png')
}
function pic_floor13(res) {
    pic_floor(res, '../images/pic_floor13.png')
}
function pic_floor14(res) {
    pic_floor(res, '../images/pic_floor14.png')
}
function pic_floor15(res) {
    pic_floor(res, '../images/pic_floor15.png')
}
module.exports = { banner3,banner1,banner2,icon_index_nav1,icon_index_nav2,icon_index_nav3,icon_index_nav4,
    pic_floor1,pic_floor2,pic_floor3,pic_floor4,pic_floor5,pic_floor6,pic_floor7,pic_floor8,pic_floor9,
    pic_floor10,pic_floor11,pic_floor12,pic_floor13,pic_floor14,pic_floor15
}
