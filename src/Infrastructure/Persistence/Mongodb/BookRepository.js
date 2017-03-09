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
        }).limit(10);
    }


    /**
     *
     * @param callback
     */
    findAvailableBooks(callback)
    {
        BookModel.find({ reservation: {$exists: false}}, function (err, books) {
            if (err || books.length == 0) {
                callback(new Error('Book Not Found'), null);
                return;
            }
            callback(null, books);
        }).limit(10);
    }

    /**
     * @param data
     * @param callback
     */
    addReservation(data, callback)
    {
        BookModel.findOneAndUpdate({id: data.id}, data, function (err, book) {
            if (err) {
                callback(new Error('Book not updated'), null);
                return;
            }

            callback(null, true);
        });
    }

    /**
     * @param data
     * @param callback
     */
    updateReservation(data, callback)
    {
        BookModel.findOneAndUpdate({id: data.id}, data.body, function (err, book) {
            if (err) {
                callback(new Error('Book not updated'), null);
                return;
            }

            callback(null, true);
        });
    }

    /**
     * @param idBook
     * @param callback
     */
    deleteReservation(bookId, callback)
    {
        BookModel.findOneAndUpdate({id: bookId}, {$unset: {reservation: 1 }}, function (err) {
            if (err) {
                callback(new Error('Book not updated'), null);
                return;
            }
            callback(null, true);
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

    /**
     * @param data
     * @param callback
     */
    update(data, callback)
    {
        BookModel.findOneAndUpdate({id: data.id}, data.body, function (err) {
            if (err) {
                callback(new Error('Book not updated'), null);
                return;
            }
            callback(null, true);
        });
    }

    /**
     * @param idBook
     * @param callback
     */
    delete(id, callback)
    {
        BookModel.remove({id: id}, function(err) {
            if (err) {
                callback(new Error('Book not deleted'), null);
                return;
            }
            callback(null, true);
        });
    }
}

module.exports = BookRepository;