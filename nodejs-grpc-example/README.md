# nodejs-grpc-example
 - Simple gRpc example using node.js

# References
 - grpc (https://grpc.io/docs/languages/node/basics/)
 - protobuf (https://developers.google.com/protocol-buffers/docs/reference/javascript-generated)

# Project setup
```
express nodejs-grpc-example
```

```
cd nodejs-grpc-example && npm install
```


# Requirements
 - protoc (3.9.1)
 - protoc-gen-grpc 

# How to Make .proto file for grpc
 - protoc-gen-grpc helloworld.proto --js_out=import_style=commonjs,binary:bin --grpc_out=dist