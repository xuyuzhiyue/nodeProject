var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
   res.send('首页')
});

router.get('/classify', function(req, res) {
  fs.readFile(path.join(__dirname,'../public/classify.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
});

router.get('/productList',function(req,res){
  fs.readFile(path.join(__dirname,'../public/productList.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
})

router.get('/rotationChart',function(req,res){
  fs.readFile(path.join(__dirname,'../public/rotationChart.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
})

router.get('/Navigation',function(req,res){
  fs.readFile(path.join(__dirname,'../public/Navigation.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
})

router.get('/floor',function(req,res){
  fs.readFile(path.join(__dirname,'../public/floor.json'),(err,data) =>{
    if(err) throw err
    res.send(data.toString())
  })
})

module.exports = router;
