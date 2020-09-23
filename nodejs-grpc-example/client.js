/* Client */
/* : node client.js */

var request_pb = require('./dist/request_pb');
var result_pb = require('./dist/result_pb');
var service_pb = require('./dist/result_include_grpc_pb')

var common = require('./dist/empty_pb');
// var services = require('./dist/helloworld_grpc_pb');

var grpc = require('grpc');

function main() {
  var client = new service_pb.GreeterClient('localhost:50051',
  grpc.credentials.createInsecure());
  
  var hello_request = new request_pb.HelloRequest();
  // var result_pb = new HelloReply();
  hello_request.setName("world")

  client.sayHello(hello_request, function(err, res){
    console.log('Greeting:', res.getMessage());
  });
  
  // if (process.argv.length >= 3) {
  //   user = process.argv[2];
  // } else {
  // 	user = 'world';
  // }
  
  // request.setName(user);
  // client.sayHello(request, function(err, response) {
  //   console.log('Greeting:', response.getMessage());

  //   client.getMyName(no_param, function(err, response) {
  //     console.log('Who Am I? :', response.getMessage());
  //   });

  // });

  
}

main();