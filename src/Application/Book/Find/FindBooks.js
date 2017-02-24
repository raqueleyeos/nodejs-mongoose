const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(callback){
    var bookRepository = new BookRepository();
    bookRepository.findBooks(callback);
    bookRepository.close();
};