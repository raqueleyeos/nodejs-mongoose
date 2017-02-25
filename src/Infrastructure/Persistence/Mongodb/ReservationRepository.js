const ReservationModel = require('src/Infrastructure/Persistence/Mongodb/Model/ReservationModel');
const mongoose = require('mongoose');
const settings = require('src/Config/Settings');
const Reservation = require('src/Domain/Reservation');
const ReservationRepositoryFactory = require('src/Infrastructure/Persistence/Mongodb/ReservationRepositoryFactory');

class ReservationRepository {

    constructor()
    {
        mongoose.connect(settings.mongodb.url + settings.mongodb.database);
    }

    /**
     * Close connection mongoDB
     */
    close()
    {
        mongoose.connection.close();
    }

    /**
     * @param integer id
     * @param callback
     */
    findReservationById(id, callback)
    {
        ReservationModel.find({id: id}, function(err, reservation) {
            if (err || reservation.length == 0) {
               callback(new Error('Reservation Not Found'), null);
               return;
            }
            var reservationModel = ReservationRepositoryFactory.transformObjectToReservation(reservation[0]);
            callback(null, reservationModel);
        });
    }

    /**
     * @param callback
     */
    findReservations(callback)
    {
        ReservationModel.find({}, function (err, reservations) {
            if (err || reservations.length == 0) {
                callback(new Error('Reservation Not Found'), null);
                return;
            }
            callback(null, reservations);
        }).limit(10);
    }


    /**
     * @param array data
     * @param callback
     */
    save(data, callback)
    {
        var reservationToRegistry = ReservationRepositoryFactory.transformArrayToObjectMongo(data);
        console.log(reservationToRegistry);
        ReservationModel.create(reservationToRegistry, function(err) {
            if (err) {
                callback(new Error('Reservation not stored'), null);
                return;
            }
            callback(null, true);
        });
    }

    /**
     * @param data
     * @param callback
     */
    update(data, callback)
    {
        ReservationModel.findOneAndUpdate({id: data.id}, data.body, function (err) {
            if (err) {
                callback(new Error('Reservation not updated'), null);
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
        ReservationModel.remove({id: id}, function(err) {
            if (err) {
                callback(new Error('Reservation not deleted'), null);
                return;
            }
            callback(null, true);
        });
    }
}

module.exports = ReservationRepository;