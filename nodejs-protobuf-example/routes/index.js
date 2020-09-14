var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var messages = require('../bin/addressbook_pb')
  try{
    console.log('messages : ' , messages);
    console.log('messages : ' , messages.Person);
    var addressBook = messages.AddressBook();
    console.log("addressBook : " , addressBook)
    var person = messages.Person();
    var PhoneNumber = messages.PhoneNumber();
    
    console.log("person : " , person)
    console.log("PhoneNumber : " , PhoneNumber)
  }catch(e){
    console.log('e : ' , e);
  }
  // var person = new messages.Person();
  console.log('addressBook :',addressBook);
  console.log('person :',person);
  // TRACKER_INFORMATION
  // required string name = 1;
  // required int32 id = 2;
  // optional string email = 3;
  person.name = "John Doe"
  person.age = 25
  person.PhoneNumber = ["010-3333-2222","010-1234,1234"]
  
  // Serializes to a UInt8Array.
  var bytes = person.serializeBinary();
  
  console.log("bytes : " , bytes); 
  
  var message2 = person.deserializeBinary(bytes);

  console.log('deserialize : ' , message2);
  // messages.AddressBook.serial
  // var message = new messages.MyMessage();
  // var john =
  // messages.newBuilder()
  //   .setId(1234)
  //   .setName("John Doe")
  //   .setEmail("jdoe@example.com")
  //   .addPhones(
  //     Person.PhoneNumber.newBuilder()
  //       .setNumber("555-4321")
  //       .setType(Person.PhoneType.HOME))
  //   .build();

  // console.log("john : " , john);
  res.render('index', { title: 'Express' });
});

router.get('/protobufjs', function(req, res, next) {
  var protobuf = require("protobufjs");

  // load from .proto
  protobuf.load("addressbook.proto", function(err, root){
    if(err){
      console.log("load pb failed : " , err);
      throw err
    }
    // console.log("root : " , root);
    var someMessage = root.lookupType("tutorial.Person");
    var payload = {name : "John Doe"}

    var errmsg = someMessage.verify(payload);
    if(errmsg){
      console.log('verify failed : ' , errmsg)
      throw errmsg
    }
    var message = someMessage.create(payload);
    var buffer = someMessage.encode(message).finish();
    console.log("buffer : " , buffer)
    var message = someMessage.decode(buffer);

    var jobj = someMessage.toObject(message, {
      longs: String,
      enums: String,
      bytes: String,
    })

    console.log('jobj : ' ,JSON.stringify(jobj));
    // console.log('someMessage : ' ,someMessage);

  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
