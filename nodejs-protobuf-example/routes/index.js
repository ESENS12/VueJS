var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  //pb에 데이터를 담는 과정
  var addressbooks = require('../bin/addressbook_pb')
  var simpleTest = require('../bin/simpleTest_pb')
  try{

    // var message = new simpleTest.Test1();
    // console.log(message.setA(10000))
    // console.log(message.getA())
    // console.log(addressbooks);

    var addressbook = new addressbooks.AddressBook();
    
    //normal message constructor
    var person = new addressbooks.Person();
    
    //nested message constructor
    var phoneNumber = new addressbooks.Person.PhoneNumber();
    phoneNumber.setNumber("010-1111-2222")
    phoneNumber.setType(1)

    // console.log(phoneNumber.getNumber())
    // console.log(phoneNumber.getType())

    //array type must be use add or setPhones([])
    person.addPhones(phoneNumber);
    // var getPhones = person.getPhonesList();

    person.setName("SENS LEE")
    person.setId(1)
    person.setEmail("ESENS@corp.com")
    addressbook.addPeople(person)
    var people_list = addressbook.getPeopleList()
    
    //person === people_list[0]
    // console.log("person : " , person)
    // console.log("people : " , people_list[0])
    console.log("name : " , people_list[0].getName())
    console.log("id : " , people_list[0].getId())
    console.log("email : " , people_list[0].getEmail())
    console.log("phonNumber : " , people_list[0].getPhonesList()[0].getNumber())
    
    
    var serialize_data = addressbook.serializeBinary()
    console.log(`serializeBinary : ${serialize_data}`);
    
    //byte array
    console.log(serialize_data[0])

    var deserialize_data = addressbooks.AddressBook.deserializeBinary(serialize_data);
    console.log(`deserialize_data : ${deserialize_data}`);
    console.log(`deserialize_data name: ${deserialize_data.getPeopleList()[0].getName()}`);
    console.log(`deserialize_data id: ${deserialize_data.getPeopleList()[0].getId()}`);
    console.log(`deserialize_data email: ${deserialize_data.getPeopleList()[0].getEmail()}`);
    console.log(`deserialize_data phonNumber: ${deserialize_data.getPeopleList()[0].getPhonesList()[0].getNumber()}`);
  
  }catch(e){
    console.log('e : ' , e);
  }
  
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
