let express = require('express');
let router = express.Router();

// const SecretKey = "~!@#$THISISPRIVATEKEY";

router.get('/', function(req, res, next) {
    // console.log("/sendMail");
    res.status(200).send("SendMail Ok");
    // res.sendFile(path.join(__dirname, '../../public', 'index.html')); 
});

router.get('/auth',function(req, res, next){

    console.log('/auth');

    let email = req.query.email;
    let token = req.query.token;

    //검증 로직..
    if(email && token){

        console.log("email : " , email , ", token : " + token);
        res.send("SignIn Success!");

    }else{

        res.status(404).send("Error!");

    }

});

// /sendMail/test


module.exports = router