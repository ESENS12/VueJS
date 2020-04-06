var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//

var i = 0 ;
// * 초  * 분  * 시  * 일  * 월  * 연

// 일반계정은 1달인데, 1달이 다와가면 메일 보냄->(1일 남았습니다. 2일남았습니다....) 영업부 쪽 메일 주소로 reply 하도록 안내 (더이상 사용안함 버튼 -> 클릭하면)
// user 메모 필드에 json타입으로 어떤 값을 넣어두고 쓰도록 하자


// 사용량은 12시간 마다 체크
var scheduler = schedule.scheduleJob('*/3 * * * * *', function(){
  // '*/3 * * * * *' -> 3초마다
  // '* * * * * * ' -> 매초마다
  // '1-10 * * * * * ' -> 현재 초가 1~10초인경우 실행
  //  console.log('5분마다 실행'); 
   console.log('3초마다 실행 : ' , i);
   i++; 
   //작업 취소
   if(i > 10){
     scheduler.cancel();
   }
  });
  

module.exports = app;
