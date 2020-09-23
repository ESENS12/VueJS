// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// request,result 합쳐서 사용..
//
'use strict';
var grpc = require('grpc');
var empty_pb = require('./empty_pb.js');
var request_pb = require('./request_pb.js');
var result_pb = require('./result_pb.js');

function serialize_request_HelloRequest(arg) {
  if (!(arg instanceof request_pb.HelloRequest)) {
    throw new Error('Expected argument of type request.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_request_HelloRequest(buffer_arg) {
  return request_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_result_HelloReply(arg) {
  if (!(arg instanceof result_pb.HelloReply)) {
    throw new Error('Expected argument of type result.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_result_HelloReply(buffer_arg) {
  return result_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/result.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: request_pb.HelloRequest,
    responseType: result_pb.HelloReply,
    requestSerialize: serialize_request_HelloRequest,
    requestDeserialize: deserialize_request_HelloRequest,
    responseSerialize: serialize_result_HelloReply,
    responseDeserialize: deserialize_result_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
