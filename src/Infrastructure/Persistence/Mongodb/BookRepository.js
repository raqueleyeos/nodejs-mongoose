const BookModel = require('src/Infrastructure/Persistence/Mongodb/Model/BookModel');
const mongoose = require('mongoose');
const settings = require('src/Config/Settings');
const Book = require('src/Domain/Book');
const BookRespositoryFactory = require('src/Infrastructure/Persistence/Mongodb/BookRepositoryFactory');

class BookRepository {

    constructor()
    {
        mongoose.connect(settings.mongodb.url + settings.mongodb.database);
    }

    static close() {
        mongoose.connection.close()
    }

    /**
     * @param id
     * @param callback
     */
    findBookById(id, callback)
    {
        BookModel.find({id: id}, function(err, book) {
            if (err || book.length == 0) {
               callback(new Error('Book Not Found'), null);
               return;
            }
            var bookModel = BookRespositoryFactory.transformObjectToBook(book[0]);
            BookRepository.close();
            callback(null, bookModel);
        });
    }

    /**
     * @param callback
     */
    findBooks(callback)
    {
        BookModel.find({}, function (err, books) {
            if (err) {
                callback(new Error(err.message), null);
                return;
            }
            BookRepository.close();
            callback(null, books);
        });
    }

    /**
     * @param data
     * @param callback
     */
    save(data, callback)
    {
        var bookToRegistry = BookRespositoryFactory.transformArrayToObjectMongo(data);
        BookModel.create(bookToRegistry, function(err) {
            if (err) {
                callback(new Error('Book not stored'), null);
                return;
            }
            BookRepository.close();
            callback(null, true);
        });
    }
}

module.exports = BookRepository;