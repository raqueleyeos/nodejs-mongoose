const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(data, callback){
    if (!verifyRequestData(data.body)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var bookRepository = new BookRepository();
    bookRepository.updateReservation(data, callback);
};

function verifyRequestData(data)
{
    if (data['id'] === undefined) return false;
    if (data['title'] === undefined) return false;
    if (data['author'] === undefined) return false;
    if (data['pages'] === undefined) return false;
    if (data['publisher'] === undefined) return false;

    if (data['reservation']['reservationDate'] === undefined) return false;
    if (data['reservation']['expirationDate'] === undefined) return false;

    return true;
}
