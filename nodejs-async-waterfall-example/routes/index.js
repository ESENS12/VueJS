var express = require('express');
var router = express.Router();

const redis = require( "redis" );

const async = require( "async" );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/async_waterfall',function(req,res,next){
  client = redis.createClient();

  client.on( "error", (err) => {
    console.log( "[Redis] Error " + err );
  });

  async.waterfall(
    [
      callback => {
        setTimeout(() => {
          console.log("task 1");
          callback(null, "task 2");
        }, 1000);
      },
      (arg1, callback) => {
        
        console.log(arg1);
        callback(null, "task 3");
        
      },
      (arg1, callback) =>{
        setTimeout(() => {
          console.log(arg1);
          callback("error message", "error");
        }, 2500);
      }
    ],
    (err, result) => {
      // 결과 함수 수행
      if (err) {
        console.error(err);
        return res.status(404).send('Error : ' +err);
      }
      // console.log(result);
      return res.status(200).send('END');
    }
  );


  // var wakeup = function (callback){
  //   callback(null, ['세수하기']);
  // }
  // var eat = function(doing,callback){
  //   callback(null, doing.concat(['밥먹기, 양치질하기']));
  // }
  // var goToWork = function(doing, callback){
  //   callback(null, doing.concat(['출근하기']))
  // }
  // var comebackHome = function(doing, callback){
  //   // callback(null, doing.concat(['퇴근하기']))
  //   callback('야근', doing);
  // }

  // var tasks = [wakeup, eat, goToWork,comebackHome]
  // async.waterfall(tasks, function(err, result){
  //   if(err) {
  //     console.log("Error : " + result.concat(err));
  //   }
  //   else{
  //     console.log("오늘 한 일 : ", result);
  //   }
  // });


  // async.parallel([
  //   function(callback) {
  //     setTimeout(function() {
  //       console.log('Task One');
  //       callback(null, 1);
  //     }, 200);
  //   },
  //   function(callback) {
  //     setTimeout(function() {
  //       console.log('Task Two');
  //       callback(null, 2);
  //     }, 1000);
  //   }
  // ],
  // function(err, results) {
  //   console.log(results);
  //   // the results array will equal [1, 2] even though
  //   // the second function had a shorter timeout.
  // });


  async.series([
    function(callback) {
      console.log('one');
      callback(null, 1);
    },
    function(callback) {
      setTimeout(function() {
        console.log('two');
        callback(null, 2);
      }, 1000);
    },
    function(callback) {
      console.log('three');
      callback(null, 3);
    }
  ],
  function(err, results) {
    console.log(results);
    // results is now equal to [1, 2, 3]
  });

});

module.exports = router;
