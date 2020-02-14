let express = require('express');
// let app = express();
// var bodyParser = require('body-parser');
let path = require("path");
let router = express.Router();
let jwt = require("jsonwebtoken");

// router.use(bodyParser.json);

const SecretKey = "~!@#$THISISPRIVATEKEY";

router.post('/', function(req, res, next) {
    try{
        const email = req.body.email;
        const password = req.body.password;

        console.log('email : ' + email  + ", password: " + password);

        if(email && password){
            res.status(200).json({accessToken : "Hello " + email});
        }else{
            res.status(200).json({accessToken : "Hello World!"});
        }
        
    }catch(err){
        console.error(err);
        res.status(400).send("Error : " + err);
    }
});


router.post('/login', function(req, res, next) {
    try{
        const email = req.body.email;
        const password = req.body.password;

        // console.log('email : ' + email  + ", password: " + password);
        
        if(email && password){

            let token = makeToken(email,password);

            if(token){
                res.status(200).json({accessToken : token});
            }
            
        }else{
            res.status(200).json({accessToken : "Hello World!"});
        }
        
    }catch(err){
        console.error(err);
        res.status(400).send("Error : " + err);
    }
});

router.get('/getSecretKey', function(req, res, next) {
    try{
        const email = req.body.email;
        const password = req.body.password;

        console.log('email : ' + email  + ", password: " + password);
        if(email && password){
            res.status(200).json({accessToken : "Hello " + email});
        }else{
            res.status(200).json({accessToken : "Hello World!"});
        }
        
    }catch(err){
        console.error(err);
        res.status(400).send("Error : " + err);
    }
});



let makeToken = (id,password) => {
    try{

        if(id && password){

            let token = jwt.sign({
                userId: id,  
                userPassword : password,
            },
                SecretKey,    // 비밀키
                {
                    expiresIn: '5m'    // 유효 시간은 5분(옵션)
                }
            );

            res.send({token : token});

        }else{
            return;
        }
    
    }catch(err){
        console.log("Exception : ",err);
        return;
    }  
}

//파라메터 받아서 토큰 생성 후 리턴
router.post("/signup", function(req,res,next){
    console.log(req.body);
    
    try{

        const id = req.body.userId;
        const password = req.body.userPassword;

        if(id && password){

            let token = jwt.sign({
                userId: id,  
                userPassword : password,
            },
                SecretKey,    // 비밀키
                {
                    expiresIn: '5m'    // 유효 시간은 5분(옵션)
                }
            );

            res.send({token : token});

        }else{
            res.status(403).send("Need ID or Password!");
        }
    
    }catch(err){
        console.log("Exception : ",err);
        res.status(403).send("Need ID or Password!");
    }  
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
module.exports = router