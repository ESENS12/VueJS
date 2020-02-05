var express = require('express');
var router = express.Router();
var Book = require('../models/book');

const book = new Book();
book.title = "BookName";
book.author = "author"

router.get('/', function(req, res, next) {
  console.log('book.title : ' + book.title);

    book.save(function(err){
      if(err){
          console.error(err);
          res.json({result: false});
          return;
      }

      res.json({result: true});

  });
});

router.get('/getAll', function(req,res){
  Book.find(function(err, books){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(books);
  })
});

// GET SINGLE BOOK
router.get('/getbook', function(req, res){

  if(req.query.book_name){
    Book.findOne({title: req.query.book_name}, function(err, book){
        if(err) return res.status(500).json({error: err});
        if(!book) return res.status(404).json({error: 'book not found'});
        res.json(book);
    });

  }else if(req.query.author){
    Book.find({author: req.query.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
      if(err) return res.status(500).json({error: err});
      if(books.length === 0) return res.status(404).json({error: 'book not found'});
      res.json(books);
    });
  }
});


// GET ALL BOOK USING WHERE
router.get('/getbooks', function(req, res){

  if(req.query.book_name){
    Book.find({title: req.query.book_name}, function(err, book){
        if(err) return res.status(500).json({error: err});
        if(!book) return res.status(404).json({error: 'book not found'});
        res.json(book);
    });

  }else if(req.query.author){
    Book.find({author: req.query.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
      if(err) return res.status(500).json({error: err});
      if(books.length === 0) return res.status(404).json({error: 'book not found'});
      res.json(books);
    });
  }
});

// UPDATE THE BOOK
router.get('/update', function(req, res){
  Book.findById(req.query.book_id, function(err, book){

      if(err) return res.status(500).json({ error: 'database failure' });
      if(!book) return res.status(404).json({ error: 'book not found' });

      book.title = "new_title";
      book.author = "new_author";

      book.save(function(err){
          if(err) res.status(500).json({error: 'failed to update'});
          res.redirect('/users/getAll');
          // res.json({message: 'book updated'});
      });
  });
});

// DELETE THE BOOK
router.get('/delete', function(req, res){
  //remove is deprecated, use deleteOne or deleteMany
  Book.deleteOne({ _id: req.query.book_id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });
      // res.status(204).end();
      res.redirect('/users/getAll');
  })
});


module.exports = router;
