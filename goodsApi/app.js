var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
// 引用seesion模块
const session = require('express-session')

var indexRouter = require('./routes/index');
var goodsDetailRouter = require('./routes/goodsDetail');
var manageUsers = require('./routes/manageUsers')
var upload = require('./routes/upload')
var uploadImage = require('./routes/uploadImage')
var order = require('./routes/order')
var collect = require('./routes/collect')
var liuyan = require('./routes/liuyan')
var gouwuche = require('./routes/gouwuche')
var address = require('./routes/address')

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
  secret:"kmknlinolni",
  resave:'true',
  cookie:{},
  saveUninitialized:'true',
  // maxAge:200000
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use( goodsDetailRouter);
app.use( manageUsers);
app.use(upload)
app.use(uploadImage)
app.use( order )
app.use(collect)
app.use(liuyan)
app.use(gouwuche)
app.use(address)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(8800,function(){
  console.log('http://127.0.0.1:8800');
})