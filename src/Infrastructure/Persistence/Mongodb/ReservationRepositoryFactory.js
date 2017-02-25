const Reservation = require('src/Domain/Reservation');

/**
 * @param array data
 *
 * @returns array
 */
module.exports.transformArrayToObjectMongo = function(data)
{
    return [{
        id : data['id'],
        bookId : data['bookId'],
        reservationDate : data['reservationDate'],
        expirationDate : data['expirationDate'],
        active : data['active']
    }];
};

/**
 * @param data
 *
 * @returns Reservation
 */
module.exports.transformObjectToReservation = function(data)
{
    return new Reservation(
        data.id,
        data.bookId,
        data.reservationDate,
        data.expirationDate,
        data.active
    );
};