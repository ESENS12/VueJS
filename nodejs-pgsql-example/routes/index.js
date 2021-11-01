var express = require('express');
var router = express.Router();

const { Client } = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pgsql', function(req,res,next){

  const client = new Client({
      user : 'master',
      host : 'localhost',
      database : 'tracker',
      password : 'masterpass11',
      port : 5432,
  });
  
  client.connect();
  
  client.query('SELECT NOW()', (err, res) => {
      console.log(err, res)
      client.end()
  });
  
  res.status(200).send;
})
module.exports = router;
