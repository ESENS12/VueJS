let express = require('express');
var path = require("path")

let router = express.Router();

let jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

// vue sample
// router.get('/', function(req, res, next) { 
//     res.sendFile(path.join(__dirname, '../../public', 'index.html')); 
// });

router.get("/", function(req,res,next){
    
    //토큰 발행 샘플 
  let token = jwt.sign({
        email: "foo@example.com"   // 토큰의 내용(payload)
      },
        secretObj.secret,    // 비밀키
        {
            expiresIn: secretObj.expiresin    // 유효 시간은 5분
        }
    )

    if(typeof token != 'undefined'){
        res.cookie("user", token);
        res.json({
            token: token
        })
        var decoded = jwt.verify(token, secretObj.secret);
        console.log("decoded: " + decoded.email);
    }else{
        res.status(403).send("Key is Not Validate!");
    }

});

router.use('/test', require('../../routes/api/testToken'));

module.exports = router