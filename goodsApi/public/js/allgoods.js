var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
})



let allData
// 大家电变量
let bigTelevision
let bigAirConditioner
let bigWashing
let bitRefrigerator

// 热门推荐
let hotChristmas

// 海外购
let Overseas
let OverInter
let OverMotherInfant
let OverMakeup
let OverPersonalCare
let OverNutrition
let OverFoots
let OverDigital
let OverClothes

// 苏宁房产
let suifan

// 手机照片
let iphonMajorSuit
let iphonOpportunity
let iphonParts
let iphonWebServer
let iphonPhotography
let iphonCameraAcc

// 电脑办公
let officMachine
let officePeripheral
let officeDIY
let officeNetwork

// 厨卫电器
let kitBathroom
let kitBigEle
let kitWaterPur


// 食品酒水
let footWatFam
let footWatMilkBlen
let footWatFreshFruits
let footWatSnacks


// 厨房电器
let KitchAppChina
let KitchAppWest

// 生活电器
let liftEnvir
let liftHome


function allMysqlData(res) {

    // 大家电
    // 1.获取电视的数据
    const sqlTv = 'select * from allgoods where isdel = 0 and cat_type = "电视"'
    connection.query(sqlTv, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        bigTelevision = {
            "cat_id": 3,
            "cat_name": "电视",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 1.获取空调的数据
    const sqlAir = 'select * from allgoods where isdel = 0 and cat_type = "空调"'
    connection.query(sqlAir, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        bigAirConditioner = {
            "cat_id": 7,
            "cat_name": "空调",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取洗衣机的数据
    const sqlWas = 'select * from allgoods where isdel = 0 and cat_type = "洗衣机"'
    connection.query(sqlWas, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        bigWashing = {
            "cat_id": 7,
            "cat_name": "空调",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取冰箱的数据
    const sqlRef = 'select * from allgoods where isdel = 0 and cat_type = "冰箱"'
    connection.query(sqlRef, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        bitRefrigerator = {
            "cat_id": 7,
            "cat_name": "空调",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 热门推荐
    // 获取圣诞狂欢数据
    const sqlChr = 'select * from allgoods where isdel = 0 and cat_type = "圣诞狂欢"'
    connection.query(sqlChr, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        hotChristmas = {
            "cat_id": 69,
            "cat_name": "圣诞狂欢",
            "cat_pid": 55,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 海外购
    // 获取国际名牌数据
    const sqlInter = 'select * from allgoods where isdel = 0 and cat_type = "国际名牌"'
    connection.query(sqlInter, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverInter = {
            "cat_id": 89,
            "cat_name": "国际名牌",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取母婴幼儿数据
    const sqlMother = 'select * from allgoods where isdel = 0 and cat_type = "母婴儿童"'
    connection.query(sqlMother, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverMotherInfant = {
            "cat_id": 91,
            "cat_name": "母婴儿童",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取美妆数据
    const sqlMakeup = 'select * from allgoods where isdel = 0 and cat_type = "美妆"'
    connection.query(sqlMakeup, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverMakeup = {
            "cat_id": 92,
            "cat_name": "美妆",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取个护数据
    const sqlPers = 'select * from allgoods where isdel = 0 and cat_type = "个护"'
    connection.query(sqlPers, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverPersonalCare = {
            "cat_id": 111,
            "cat_name": "个护",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })



    // 获取营养保健数据
    const sqlNutr = 'select * from allgoods where isdel = 0 and cat_type = "营养保健"'
    connection.query(sqlNutr, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverNutrition = {
            "cat_id": 112,
            "cat_name": "营养保健",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取食品数据
    const sqlFoots = 'select * from allgoods where isdel = 0 and cat_type = "食品"'
    connection.query(sqlFoots, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverFoots = {
            "cat_id": 119,
            "cat_name": "食品",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 获取数码家电数据
    const sqlDig = 'select * from allgoods where isdel = 0 and cat_type = "数码家电"'
    connection.query(sqlDig, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverDigital = {
            "cat_id": 134,
            "cat_name": "数码家电",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取服饰箱包数据
    const sqlCloth = 'select * from allgoods where isdel = 0 and cat_type = "服饰箱包"'
    connection.query(sqlCloth, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        OverClothes = {
            "cat_id": 155,
            "cat_name": "服饰箱包",
            "cat_pid": 71,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 苏宁房产
    // 获取苏宁房产数据
    const sqlSuifan = 'select * from allgoods where isdel = 0 and cat_type = "苏宁房产"'
    connection.query(sqlSuifan, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        suifan = {
            "cat_id": 171,
            "cat_name": "苏宁房产",
            "cat_pid": 170,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 手机照片
    // 获取大牌推荐数据
    const sqlMajor = 'select * from allgoods where isdel = 0 and cat_type = "大牌推荐"'
    connection.query(sqlMajor, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonMajorSuit = {
            "cat_id": 184,
            "cat_name": "大牌推荐",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 获取搞机达人数据
    const sqlOpporr = 'select * from allgoods where isdel = 0 and cat_type = "搞机达人"'
    connection.query(sqlOpporr, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonOpportunity = {
            "cat_id": 184,
            "cat_name": "大牌推荐",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 获取手机配件数据
    const sqlParts = 'select * from allgoods where isdel = 0 and cat_type = "手机配件"'
    connection.query(sqlParts, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonParts = {
            "cat_id": 199,
            "cat_name": "手机配件",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取手机服务数据
    const sqlServer = 'select * from allgoods where isdel = 0 and cat_type = "手机服务"'
    connection.query(sqlServer, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonWebServer = {
            "cat_id": 212,
            "cat_name": "手机服务",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 获取摄影摄像数据
    const sqlPhotography = 'select * from allgoods where isdel = 0 and cat_type = "摄影摄像"'
    connection.query(sqlPhotography, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonPhotography = {
            "cat_id": 228,
            "cat_name": "摄影摄像",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 获取相机配件数据
    const sqlCameraAcc = 'select * from allgoods where isdel = 0 and cat_type = "相机配件"'
    connection.query(sqlCameraAcc, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        iphonCameraAcc = {
            "cat_id": 245,
            "cat_name": "相机配件",
            "cat_pid": 172,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 电脑办公
    // 1.获取电脑整机数据
    const sqlMachin = 'select * from allgoods where isdel = 0 and cat_type = "电脑整机"'
    connection.query(sqlMachin, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        officMachine = {
            "cat_id": 281,
            "cat_name": "电脑整机",
            "cat_pid": 266,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取电脑外设数据
    const sqlPeri = 'select * from allgoods where isdel = 0 and cat_type = "电脑外设"'
    connection.query(sqlPeri, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        officePeripheral = {
            "cat_id": 281,
            "cat_name": "电脑整机",
            "cat_pid": 266,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取DIY硬件数据
    const sqlDIY = 'select * from allgoods where isdel = 0 and cat_type = "DIY硬件"'
    connection.query(sqlDIY, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        officeDIY = {
            "cat_id": 281,
            "cat_name": "电脑整机",
            "cat_pid": 266,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取网络设备数据
    const sqlNet = 'select * from allgoods where isdel = 0 and cat_type = "网络设备"'
    connection.query(sqlNet, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        officeNetwork = {
            "cat_id": 281,
            "cat_name": "电脑整机",
            "cat_pid": 266,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 厨卫电器
    // 1.获取卫浴电器数据
    const sqlBath = 'select * from allgoods where isdel = 0 and cat_type = "卫浴电器"'
    connection.query(sqlBath, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        kitBathroom = {
            "cat_id": 324,
            "cat_name": "卫浴电器",
            "cat_pid": 321,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 1.获取厨房大电数据
    const sqlBigEle = 'select * from allgoods where isdel = 0 and cat_type = "厨房大电"'
    connection.query(sqlBigEle, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        kitBigEle = {
            "cat_id": 336,
            "cat_name": "厨房大电",
            "cat_pid": 321,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取净水设备数据
    const sqlWaterPu = 'select * from allgoods where isdel = 0 and cat_type = "净水设备"'
    connection.query(sqlWaterPu, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        kitWaterPur = {
            "cat_id": 338,
            "cat_name": "净水设备",
            "cat_pid": 321,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 食品酒水
    // 1.获取中外名酒数据
    const sqlWatFam = 'select * from allgoods where isdel = 0 and cat_type = "中外名酒"'
    connection.query(sqlWatFam, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        footWatFam = {
            "cat_id": 358,
            "cat_name": "中外名酒",
            "cat_pid": 356,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取牛奶冲调数据
    const sqlMilkBlen = 'select * from allgoods where isdel = 0 and cat_type = "牛奶冲调"'
    connection.query(sqlMilkBlen, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        footWatMilkBlen = {
            "cat_id": 360,
            "cat_name": "牛奶冲调",
            "cat_pid": 356,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })



    // 1.获取生鲜蔬果数据
    const sqlFreshFruits = 'select * from allgoods where isdel = 0 and cat_type = "生鲜蔬果"'
    connection.query(sqlFreshFruits, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        footWatFreshFruits = {
            "cat_id": 370,
            "cat_name": "生鲜蔬果",
            "cat_pid": 356,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取休闲食品数据
    const sqlSnacks = 'select * from allgoods where isdel = 0 and cat_type = "休闲食品"'
    connection.query(sqlSnacks, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        footWatSnacks = {
            "cat_id": 371,
            "cat_name": "休闲食品",
            "cat_pid": 356,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 厨房电器
    // 1.获取中式厨房数据
    const sqlChina = 'select * from allgoods where isdel = 0 and cat_type = "中式厨房"'
    connection.query(sqlChina, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        KitchAppChina = {
            "cat_id": 457,
            "cat_name": "中式厨房",
            "cat_pid": 455,
            "cat_level": 1,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": result
        }
    })

    // 1.获取西式厨房数据
    const sqlWest = 'select * from allgoods where isdel = 0 and cat_type = "西式厨房"'
    connection.query(sqlWest, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        KitchAppWest = {
			"cat_id": 475,
			"cat_name": "西式厨房",
			"cat_pid": 455,
			"cat_level": 1,
			"cat_deleted": false,
			"cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 生活电器
    // 1.获取环境电器数据
    const sqlEnvir = 'select * from allgoods where isdel = 0 and cat_type = "环境电器"'
    connection.query(sqlEnvir, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        liftEnvir = {
			"cat_id": 499,
			"cat_name": "环境电器",
			"cat_pid": 492,
			"cat_level": 1,
			"cat_deleted": false,
			"cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    // 1.获取家居电器数据
    const sqlliftHome = 'select * from allgoods where isdel = 0 and cat_type = "家居电器"'
    connection.query(sqlliftHome, (err, result) => {
        if (err) throw res.send({ err_code: 1, message: '数据不存在' });
        liftHome = {
			"cat_id": 501,
			"cat_name": "家居电器",
			"cat_pid": 492,
			"cat_level": 1,
			"cat_deleted": false,
			"cat_icon": "/full/none.jpg",
            "children": result
        }
    })


    //   总的拼接
    allData = {
        "message": [{
            "cat_id": 1,
            "cat_name": "大家电",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [bigTelevision, bigAirConditioner, bigWashing, bitRefrigerator]
        }, {
            "cat_id": 55,
            "cat_name": "热门推荐",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [hotChristmas]
        }, {
            "cat_id": 71,
            "cat_name": "海外购",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [OverInter, OverMotherInfant, OverMakeup, OverPersonalCare, OverNutrition, OverFoots, OverDigital, OverClothes]
        }, {
            "cat_id": 170,
            "cat_name": "苏宁房产",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [suifan]
        }, {
            "cat_id": 172,
            "cat_name": "手机相机",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [iphonMajorSuit, iphonOpportunity, iphonParts, iphonWebServer, iphonPhotography, iphonCameraAcc]
        }, {
            "cat_id": 266,
            "cat_name": "电脑办公",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [officMachine, officePeripheral, officeDIY, officeNetwork]
        }, {
            "cat_id": 321,
            "cat_name": "厨卫电器",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [kitBathroom, kitBigEle, kitWaterPur]
        }, {
            "cat_id": 356,
            "cat_name": "食品酒水",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [footWatFam, footWatMilkBlen, footWatFreshFruits, footWatSnacks]
        }, {
            "cat_id": 455,
            "cat_name": "厨房电器",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [KitchAppChina, KitchAppWest]
        },{
            "cat_id": 492,
            "cat_name": "生活电器",
            "cat_pid": 0,
            "cat_level": 0,
            "cat_deleted": false,
            "cat_icon": "/full/none.jpg",
            "children": [liftEnvir,liftHome]
        }]
    }
    res.send(allData)
}

module.exports = allMysqlData