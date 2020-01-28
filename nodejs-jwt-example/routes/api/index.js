let express = require('express');

let router = express.Router();

let jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

router.get("/", function(req,res,next){
    console.log(secretObj.secret);
//   default : HMAC SHA256
  let token = jwt.sign({
        email: "foo@example.com"   // 토큰의 내용(payload)
      },
        secretObj.secret,    // 비밀키
        {
            expiresIn: secretObj.expiresin    // 유효 시간은 5분
        }
      )

    res.cookie("user", token);
    res.json({
        token: token
    })
})

module.exports = router;