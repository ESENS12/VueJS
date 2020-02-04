var express = require('express');
var router = express.Router();
var Book = require('../models/book');


const book = new Book();
book.title = "title";
book.author = "author"

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('book.title : ' + book.title);
  book.save();
  res.send('respond with a resource');
});



module.exports = router;
