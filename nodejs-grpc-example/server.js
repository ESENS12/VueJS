/* Server */
/* : node server.js */


// var request_pb = require('./bin/request_pb');
var result_pb = require('./dist/result_pb');
var service_pb = require('./dist/result_include_grpc_pb')


// var messages = require('./dist/helloworld_pb');
// var services = require('./dist/helloworld_grpc_pb');

var grpc = require('grpc');
var last_user_name = ''

function sayHello(call, callback) {
  var reply = new result_pb.HelloReply();
  last_user_name = call.request.getName() || ''
  console.log("sayHello called , call is : " , call )
  console.log("return result after 5 second")
  reply.setMessage('Hello ' + call.request.getName());

  setTimeout(function(){
    console.log('do send reply!')
    callback(null, reply);
  }, 5000, 'justforwait')
  
}

function getMyName(call, callback) {
  var reply = new messages.HelloReply();
  reply.setMessage('Your name is ' + last_user_name);
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
//   console.log(services.GreeterService)
  // server.addService(services.GreeterService, { getMyName: getMyName , sayHello: sayHello });
  server.addService(service_pb.GreeterService, { sayHello: sayHello });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('Hello Server');

}

main();