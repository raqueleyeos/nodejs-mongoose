
class Reservation {

    constructor(reservationDate, expirationDate) {

        this.reservationDate = reservationDate;
        this.expirationDate = expirationDate;
    }

    getReservationDate() {
        return this.reservationDate;
    }

    getExpirationDate() {
        return this.expirationDate;
    }
}

module.exports = Reservation;
