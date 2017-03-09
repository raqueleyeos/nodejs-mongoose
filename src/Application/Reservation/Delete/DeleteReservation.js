const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(bookId, callback){

    if (!verifyRequestData(bookId)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var bookRepository = new BookRepository();
    bookRepository.deleteReservation(bookId, callback);
};

function verifyRequestData(idReservation)
{
    if (idReservation === undefined) return false;

    return true;
}
