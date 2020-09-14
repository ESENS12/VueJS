# nodejs-protobuf-example
 - Simple Examples For protobuf(proto3)

# References
 - protobuf (https://developers.google.com/protocol-buffers/docs/reference/javascript-generated)

# Project setup
```
express nodejs-protobuf-example
```

```
cd nodejs-protobuf-example && npm install
```


# How to Make .proto file to .JAVA (Compile)
 - protoc -I=. --java_out=. addressbook.proto (JAVA)
 - protoc -I=. --js_out=library=whizz/ponycopter,binary:bin addressbook.proto (JS)
 - protoc -I=. --js_out=import_style=commonjs,binary:bin addressbook.proto (JS With CommonJS-Style)