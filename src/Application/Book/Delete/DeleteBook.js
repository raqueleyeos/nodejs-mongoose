const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(idBook, callback){

    if (!verifyRequestData(idBook)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var bookRepository = new BookRepository();
    bookRepository.delete(idBook, callback);
    bookRepository.close();
};

function verifyRequestData(idBook)
{
    if (idBook === undefined) return false;

    return true;
}