/** 
 *  Token Test는 여기서 하자
 * 
 * 
 * **/

let express = require('express');
let router = express.Router();

router.get("/", function(req,res,next){
    res.send("Hello TestToken")
})

module.exports = router;
