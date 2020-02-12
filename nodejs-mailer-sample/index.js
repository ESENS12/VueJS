const express = require('express')


const app = express()
const port = 3000
let path = require("path");


app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

// app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res) => res.send("Hello world"))
app.get('/', function(req, res, next) {
    console.log("/");
    // res.status(200).send("SendMail Ok");
    res.sendFile(path.join(__dirname, '/public', 'index.html')); 
});

app.use('/sendMail', require('./routes/api/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))