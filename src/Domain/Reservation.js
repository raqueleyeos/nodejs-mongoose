
class Reservation {

    constructor(id, bookId, reservationDate, expirationDate, active) {

        this.id = id;
        this.bookId = bookId;
        this.reservationDate = reservationDate;
        this.expirationDate = expirationDate;
        this.active = active;
    }

    getId() {
        return this.id;
    }

    getBookId() {
        return this.bookId;
    }

    getReservationDate() {
        return this.reservationDate;
    }

    getExpirationDate() {
        return this.expirationDate;
    }

    getActive() {
        return this.active;
    }
}

module.exports = Reservation;
