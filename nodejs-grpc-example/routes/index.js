var express = require('express');
var router = express.Router();
var request_pb = require('../dist/request_pb');
var service_pb = require('../dist/result_include_grpc_pb')
var grpc = require('grpc');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/someRequest',function(req,res,next){
  var client = new service_pb.GreeterClient('localhost:50051',
  grpc.credentials.createInsecure());
  
  var hello_request = new request_pb.HelloRequest();
  hello_request.setName("world")

  client.sayHello(hello_request, function(err, result){
    if(err){
      return res.status(500).send('Oooops something wrong...')
    }
    console.log('Greeting:', result.getMessage());
    return res.status(200).send(result)
  });
})

module.exports = router;
