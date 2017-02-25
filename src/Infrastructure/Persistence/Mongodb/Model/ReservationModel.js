const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
        id: {
            type: Number,
            required: true,
            unique: true
        },
        bookId: {
            type: Number,
            required: true
        },
        reservationDate: {
            type: Date,
            required: true
        },
        expirationDate: {
            type: Date,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    {
        collection: 'reservation'
    });

const ReservationModel = mongoose.model('reservation', reservationSchema);

module.exports = ReservationModel;