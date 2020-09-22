/* Client */
/* : node client.js */

var messages = require('./dist/helloworld_pb');
var common = require('./dist/empty_pb');
var services = require('./dist/helloworld_grpc_pb');

var grpc = require('grpc');

function main() {
  var client = new services.GreeterClient('localhost:50051',
  grpc.credentials.createInsecure());
  
  var request = new messages.HelloRequest();
  var no_param = new common.NO_PARAM();
  var user;

  
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
  	user = 'world';
  }
  
  request.setName(user);
  client.sayHello(request, function(err, response) {
    console.log('Greeting:', response.getMessage());

    client.getMyName(no_param, function(err, response) {
      console.log('Who Am I? :', response.getMessage());
    });

  });

  
}

main();