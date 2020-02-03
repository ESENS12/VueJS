const express = require('express')


const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

// app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.send("Hello world"))

app.use('/sendMail', require('./routes/api/'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))