const Book = require('src/Domain/Book');

/**
 * @param array data
 *
 * @returns array
 */
module.exports.transformArrayToObjectMongo = function(data)
{
    return [{
        id : data['id'],
        title : data['title'],
        author : data['author'],
        pages : data['pages'],
        publisher : data['publisher']
    }];
};

/**
 * @param data
 *
 * @returns Book
 */
module.exports.transformObjectToBook = function(data)
{
    return new Book(
        data.id,
        data.title,
        data.author,
        data.pages,
        data.publisher
    );
};