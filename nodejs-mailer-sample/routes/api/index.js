let express = require('express');
let router = express.Router();

const SecretKey = "~!@#$THISISPRIVATEKEY";

router.get('/', function(req, res, next) {
    console.log("/sendMail");
    res.status(400).send("SendMail Ok");
    // res.sendFile(path.join(__dirname, '../../public', 'index.html')); 
});

// router.use('/test', require('../../routes/api/testToken'));

module.exports = router