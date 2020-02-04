var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String
});

module.exports = mongoose.model('book', bookSchema);