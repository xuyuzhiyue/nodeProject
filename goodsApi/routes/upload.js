var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
var request = require('request')
const multer = require('multer')


// // 配置上传对象,limits限制图片大小 20M大小
let upload = multer({dest:"./public/upload",limits:{fileSize:1024*1024*20}})
// 可以放在指定的盘
// let upload = multer({dest:"D:\imagess",limits:{fileSize:1024*1024*20}})
  router.post('/upload',upload.single('imgfile'),function(req,res){
    console.log(req.file);
    // 重命名
    let oldPath = req.file.destination+"/"+req.file.filename
    let newPath = req.file.destination+"/"+req.file.filename+req.file.originalname
    fs.rename(oldPath,newPath,()=>{
      console.log("名命成功");
    })
    // res.send("<h1>上传成功<h1><img src='/upload/"+req.file.filename+"'/>")
    res.json({
      isSuccess:true,
      state:"ok",
      imgUrl:""+req.file.filename+req.file.originalname+""
    })
  })


module.exports = router;