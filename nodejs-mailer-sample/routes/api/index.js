let express = require('express');
let router = express.Router();
let config = require('../../config');
const nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
// const SecretKey = "~!@#$THISISPRIVATEKEY";

  

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};



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
router.post("/test", function(req, res, next){
    console.log("/test");
    try{
        //request 에서 메일주소 전달받아 구현 예제(단일)
        let senderEmail = req.body.email;
        console.log(senderEmail);
        
        if(senderEmail){
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config.email,             // 보내는 계정 아이디를 입력
                    pass: config.password          // 보내는 계정의 비밀번호를 입력
                }
            });

            // console.log(config.email.slice(0, config.email.indexOf('@')));
            var userName = config.email.slice(0, config.email.indexOf('@'));
                


//             옵션 리스트
//             from - The email address of the sender. All email addresses can be plain ‘sender@server.com’ or formatted ’“Sender Name” sender@server.com‘, see Address object for details
//             to - Comma separated list or an array of recipients email addresses that will appear on the To: field
//             cc - Comma separated list or an array of recipients email addresses that will appear on the Cc: field
//             bcc - Comma separated list or an array of recipients email addresses that will appear on the Bcc: field
//             subject - The subject of the email
//             text - The plaintext version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘/var/data/…’})
//             html - The HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…‘})
//             attachments - An array of attachment objects (see Using attachments for details). Attachments can be used for embedding images as well.

            //리스트의 메일주소 전송
            // let sendMailLists = ['SomeSenderMail@gmail.com', 'SomeSenderMailTwo@gmail.com']
            
            // path.join(__dirname, '../../public', 'index.html')
            readHTMLFile(__dirname + '/../../mailcontent.html', function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                    username: userName,
                    address: "https://console.fatos.biz"
               };
                var htmlToSend = template(replacements);
                let mailOptions = {
                    from: 'mailfrom@gmail.com',    // 발송 메일 주소, 달라도 어차피 위에 auth 에 작성한 mail로 설정됨
                    to:senderEmail,
                    // to: sendMailLists ,                     // 수신 메일 주소, 메일주소 unmatch 에러는 따로 콜백이 오지 않음(발신자 메일로 메일 발송 실패 메일이 오기는 함)
                    subject: 'Sending Email using Node.js',   // 제목
                    // text: 'That was easy!'  // 내용
                    html: htmlToSend
                    
                    //'<p> 회원가입을 완료하시려면 아래의 링크를 클릭해주세요 !</p>' +
                    //"<a href='http://localhost:3000/sendMail/auth?email="+ senderEmail +"&token=abcdefg'>인증하기</a>"
                };
    
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            });
        
            
            res.redirect("/");  //발송 이후 반드시 redirect해줘야함, 성공여부와 관계없이 새로고침시마다 재발송되므로..
        }
    }catch(err){
        console.log("err! : " + err);
        res.status(404).send("exception : " + err);
    }
  })




module.exports = router