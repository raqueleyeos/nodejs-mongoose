const ReservationRepository = require('src/Infrastructure/Persistence/Mongodb/ReservationRepository');

module.exports = function(id, callback){
    var reservationId = parseInt(id);
    if(isNaN(reservationId)){
        callback(new TypeError('Invalid Argument'), null);
        return;
    }

    var reservationRepository = new ReservationRepository();
    reservationRepository.findReservationById(reservationId, callback);
    reservationRepository.close();
};