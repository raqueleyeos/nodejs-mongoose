const Book = require('src/Domain/Book');
const Reservation = require('src/Domain/Reservation');

/**
 * @param array data
 *
 * @returns array
 */
module.exports.transformArrayToObjectMongo = function(data)
{
    console.log('hola', data);
    return [{
        id : data['id'],
        title : data['title'],
        author : data['author'],
        pages : data['pages'],
        publisher : data['publisher'],
        reservation : [{
            reservationDate: data['reservationDate'],
            expirationDate: data['expirationDate']
        }]
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
        data.publisher,
        new Reservation(
            data.reservation.reservationDate,
            data.reservation.expirationDate
        )
    );
};