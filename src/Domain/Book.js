class Book {

    constructor(id, title, author, pages, publisher, reservation)
    {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
        this.reservation = reservation;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.title;
    }

    getAuthor()
    {
        return this.author;
    }

    getPage()
    {
        return this.pages;
    }

    getPublisher()
    {
        return this.publisher;
    }

    getReservation()
    {
        return this.reservation;
    }
}


module.exports = Book;