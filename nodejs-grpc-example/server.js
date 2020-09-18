/* Server */
/* : node server.js */

var messages = require('./dist/helloworld_pb');
var services = require('./dist/helloworld_grpc_pb');

var grpc = require('grpc');

//요청 pbf 받아서 처리하도록 ..?
function sayHello(call, callback) {
  var reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
//   console.log(services.GreeterService)
  server.addService(services.GreeterService, { sayHello: sayHello });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('Hello Server');

}

main();