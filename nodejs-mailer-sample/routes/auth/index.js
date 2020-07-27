let express = require('express');
// let app = express();
// var bodyParser = require('body-parser');
let path = require("path");
let router = express.Router();
let jwt = require("jsonwebtoken");
var fs = require('fs');
const ncp = require('ncp').ncp;
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

var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file,index){
        var curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else { 
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
};

router.post('/deleteFolder',function(req,res,next){
    try{        
        console.log("/deleteFolder");

        let newPath = "/Users/esens/Downloads/config_copy/";
        let oldPath = req.body.oldPath;
        if(oldPath){
            if(oldPath.indexOf("/Users/esens/Downloads/") > -1){
                console.log('contain index')
                deleteFolderRecursive(oldPath);
                res.status(200).send("folder delete success!");
                return;
            }
        }
        errMsg = "filePath or fileDest is went wrong";
        console.error(errMsg);
        res.status(400).send(errMsg);
        
    }catch(err){
        console.error(err);
        res.status(400).send("Error : " + err);
    }
});

router.post('/makeFile',function(req,res,next){
    try{

        let filePath  = req.body.filePath + "";
        let fileDest = req.body.fileDest + "";

        if(filePath || fileDest){

            ncp(filePath, fileDest, (err) => {
                if (err) {
                 console.error('Error while copying folder contents.', err);
                 return;
                }else{
                    console.log("folder copy success");
                    res.status(200).send("folder copy success!");
                }
            });
           
        }else{
            errMsg = "filePath or fileDest is fucked up";
            console.error(errMsg);
            res.status(400).send(errMsg);
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


router.post('/checkAuth', function(req, res, next) {
    let result = '';
    try{

        // console.log(req);
        if(req.body.params){
            result = tokenTest(req.body.params);
        }
        console.log('res : ' + result);

        if(result){
            res.status(200).json({accessToken : result});
        }else{
            res.status(400).json({accessToken : "false"});
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

            // res.send({token : token});
            return token;
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