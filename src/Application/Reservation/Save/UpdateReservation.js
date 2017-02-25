const ReservationRepository = require('src/Infrastructure/Persistence/Mongodb/ReservationRepository');

module.exports = function(data, callback){
    if (!verifyRequestData(data.body)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var reservationRepository = new ReservationRepository();
    reservationRepository.update(data, callback);
    reservationRepository.close();
};

function verifyRequestData(data)
{
    if (data['id'] === undefined) return false;
    if (data['bookId'] === undefined) return false;
    if (data['reservationDate'] === undefined) return false;
    if (data['expirationDate'] === undefined) return false;
    if (data['active'] === undefined) return false;

    return true;
}