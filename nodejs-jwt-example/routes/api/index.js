let express = require('express');
// let app = express();
// var bodyParser = require('body-parser');
let path = require("path");
let router = express.Router();
let jwt = require("jsonwebtoken");

// router.use(bodyParser.json);

const SecretKey = "@@THISISSAMPLEKEY!!";

// vue sample
router.get('/', function(req, res, next) {
    console.log("/login [backend]");
    // res.json({
        // isLogin : false
    // })
    //dev 일때는 json을 던져주자
    res.sendFile(path.join(__dirname, '../../public', 'index.html')); 
});

router.post("/signin", function(req,res,next){
    console.log(req.body);
    // console.log('req.userId : ' + req.body.userId);
    // console.log('req.password : ' + req.body.password);

//     //토큰 발행 샘플 
  let token = jwt.sign({
        email: "foo@example.com",  // 토큰의 내용(payload)
        userName : "ESENS",
      },
        SecretKey,    // 비밀키
        {
            expiresIn: '5m'    // 유효 시간은 5분
        }
    );
    const decoded = tokenTest(token);

    if(decoded){
        res.cookie("user", token);
        res.send("email : " + decoded.email + "\n UserName : " + decoded.userName);
    
        // res.json({
        //     token: token
        // })
    }else{
        res.status(403).send("Key is Not Validate!");
    };

});

function tokenTest(token){
    if(typeof token != 'undefined'){

        var decoded = jwt.verify(token, SecretKey);

        if(decoded.email && decoded.userName){
            console.log('email and userName is verify');
        }

        console.log("Decoded Email: " + decoded.email);
        console.log("Decoded UserName : " + decoded.userName);
        return decoded;

    }else{
        //토큰이 유효하지 않을때 처리
        return false;
    }
}


router.use('/test', require('../../routes/api/testToken'));

module.exports = router