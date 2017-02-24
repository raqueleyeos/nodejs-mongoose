

/**
 * Find all books
 */
module.exports = function(api) {

    /**
     * Get all books
     */
    api.get('/books', function (req, res) {

        let FindBooks = require('src/Application/Book/Find/FindBooks');

        FindBooks((err, books) => {
            if(err){
                res.status(404).json(err.message);
                return;
            }

            res.json(books);
        });
    });

    /**
     * Add book
     */
    api.post('/book', function (req, res) {
        console.log('Creating book...');
        console.log(req.body);
        let data = req.body;
        let AddBook = require('src/Application/Book/Save/AddBook');

        AddBook(data, (err, book) => {
            if(err){
                res.status(404).json(err.message);
                return;
            }
            res.json(book);
        });
    });

    /**
     * AvailableBooks
     */
    api.get('/book/available', function (req, res) {

        let AvailableBooks = require('src/Application/Book/Find/AvailableBooks');

        console.log(AvailableBooks);
        AvailableBooks((err, books) => {
            if (err) {
                res.status(404).json(err.message);
                return;
            }

            res.json(books);
        });
    });

    /**
     * Find book by Id
     */
    api.get('/book/:id', function (req, res) {
        console.log('Getting book: ', req.params.id);
        let id = req.params.id;
        let FindBookById = require('src/Application/Book/Find/FindBookById');

        FindBookById(id, (err, book) => {
            if(err){
                res.status(404).json(err.message);
                return;
            }

            res.json(book);
        });
    });




    /**
     * Update a book
     */
    api.put('/book/:id', function (req, res) {

        let UpdateBook = require('src/Application/Book/Save/UpdateBook.js');

        var data = [];
        data['id'] = req.params.id;
        data['body'] = req.body;

        UpdateBook(data, (err, book) => {
            if (err) {
                res.status(404).json(err.message);
                return;
            }

            res.json(book);
        });
    });

    /**
     * Delete a book
     */
    api.delete('/book/:id', function (req, res) {

        let DeleteBook = require('src/Application/Book/Delete/DeleteBook.js');

        let idBook = req.params.id;

        DeleteBook(idBook, (err, book) => {
            if (err) {
                res.status(404).json(err.message);
                return;
            }

            res.json(book);
        })
    });
}


