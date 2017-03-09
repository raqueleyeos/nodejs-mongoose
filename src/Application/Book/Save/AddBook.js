const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(data, callback){
    if (!verifyRequestData(data)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var bookRepository = new BookRepository();
    bookRepository.save(data, callback);
};

function verifyRequestData(data)
{
    let attributes = ['id', 'name', 'author', 'pages', 'publisher'];

    for (let attribute of attributes) {
        if (typeof data['attribute'] === 'undefined') {
            return false;
        }
    }

    return true;
}