const express = require('express')
const history = require('connect-history-api-fallback');

const app = express()
const port = 3000

//CORS 허용
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.send("Hello world"))


app.get("/home", function(req, res, next){
    console.log("/home");
    try{
        const email = req.body.email;
        const password = req.body.password;

        if(email && password){
            console.log("id : " + email + ", password : " + password);
            res.status(200).json({message : "Hello" + email});
        }else{
            res.status(200).json({message : "HelloWorld!"});
        }
    
    }catch(err){
        console.error("Exception : ",err);
        res.status(403).send("Need ID or Password!");
    }
    
});

app.use('/login', require('./routes/api/'))

app.use(history())
app.listen(port, () => console.log(`Example app listening on port ${port}!`))