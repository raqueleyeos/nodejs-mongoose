const ReservationRepository = require('src/Infrastructure/Persistence/Mongodb/ReservationRepository');

module.exports = function(idReservation, callback){

    if (!verifyRequestData(idReservation)) {
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var reservationRepository = new ReservationRepository();
    reservationRepository.delete(idReservation, callback);
    reservationRepository.close();
};

function verifyRequestData(idReservation)
{
    if (idReservation === undefined) return false;

    return true;
}