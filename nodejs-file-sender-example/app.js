var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');
const multer = require('multer');
var ncp = require('ncp').ncp;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(cors());

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png" , "image/gif"];
  if(!allowedTypes.includes(file.mimetype)){
    const error = new Error("Incorrect file");
    error.code = "INCORRECT_FILETYPE";
    return cb(error,false)
  }
  cb(null,true);
}

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    // console.log('request file : ' , file)
    // console.log('request params : ' , request.filePath)
    console.log('destination')
      callback(null, './uploads/');
  },
  filename: function (request, file, callback) {
      // console.log(file);
      console.log('filename')
      callback(null, "copy_file_"+file.originalname)
  }
});

const upload = multer({
  // dest: './uploads',
  storage,
  fileFilter,
  limits:{
    fileSize: 5000000
  }
  // storage: storage
})

app.post('/uploadLogoImage',upload.single('file'),(req,res) =>{
  console.log("uploadLogoImage" );
  res.json({file:'Uploaded file'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("error : " , err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(5555,()=>console.log("Server listening on port 5555!"));