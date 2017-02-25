const ReservationRepository = require('src/Infrastructure/Persistence/Mongodb/ReservationRepository');

module.exports = function(callback){
    var reservationRepository = new ReservationRepository();
    reservationRepository.findReservations(callback);
    reservationRepository.close();
};