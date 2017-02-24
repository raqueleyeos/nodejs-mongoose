class Book {

    constructor(id, title, author, pages, publisher)
    {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
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
}


module.exports = Book;