const express = require('express')
const history = require('connect-history-api-fallback');

const app = express()
const port = 3000


app.get('/', (req, res) => res.send("Hello world"))

app.use('/login', require('./routes/api/'))

app.use(history())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))