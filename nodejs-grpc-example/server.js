/* Server */
/* : node server.js */

var messages = require('./dist/helloworld_pb');
var services = require('./dist/helloworld_grpc_pb');

var grpc = require('grpc');
var last_user_name = ''

function sayHello(call, callback) {
  var reply = new messages.HelloReply();
  last_user_name = call.request.getName() || ''
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

function getMyName(call, callback) {
  var reply = new messages.HelloReply();
  reply.setMessage('Your name is ' + last_user_name);
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
//   console.log(services.GreeterService)
  server.addService(services.GreeterService, { getMyName: getMyName , sayHello: sayHello });
  // server.addService(services.GreeterService, { sayHello: sayHello });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('Hello Server');

}

main();