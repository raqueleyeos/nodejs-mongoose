const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(id, callback){
    var bookId = parseInt(id);
    if(isNaN(bookId)){
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var bookRepository = new BookRepository();
    bookRepository.findBookById(bookId, callback);
};