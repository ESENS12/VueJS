/* Client */
/* : node client.js */

var result_pb = require('./dist/result_pb');
var common = require('./dist/empty_pb');

var request_pb = require('./dist/request_pb');
var service_pb = require('./dist/result_include_grpc_pb')
var grpc = require('grpc');


function main() {
  var client = new service_pb.GreeterClient('localhost:50051',
  grpc.credentials.createInsecure());
  var i;
  for(i=0; i<10; i++){
    // var result_pb = new HelloReply();
    console.log(i)
    setTimeout(function(){
      var hello_request = new request_pb.HelloRequest();
      console.log(i)
      hello_request.setName("world " + i)
      client.sayHello(hello_request, function(err, res){
        console.log('Greeting:', res.getMessage());
      });  
    }, 1000, 'justforwait')
    
  }
  
}



main();
// main_async();