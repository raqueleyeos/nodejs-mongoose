# nodejs-mongoose

## Overview

Mongoose and multi-routes with nodejs and ES6 implementation.

This example manages a small library.

## How to use it

* Execute the server in the port 3000. You can change it reconfiguring in the configuration file 'Config/Settings.js'

```bash
    $ npm run watch
    $ npm start
```

* We need a real connection to mongodb, it is also configurable in the configuration file.

* API REST

    **Requests for books**

    |Action|Type|Routes|Implemented|
    |---|---|---|---|
    |Add|POST|/api/0.1/book|yes|
    |Update|PUT|/api/0.1/book/:id|no|
    |Delete|DELETE|/api/0.1/book/:id|no|
    |Find book by ID|GET|/api/0.1/book/:id|yes|
    |List of all books|GET|/api/0.1/books/:finder|yes|
    |Get availables|GET|/api/0.1/book/available|no|

    **Requests for reserves**

    |Action|Type|Routes|Implemented|
    |---|---|---|---|
    |Add|POST|/api/0.1/reserve/book|no|
    |Update|PUT|/api/0.1/reserve/book/:id|no|
    |Delete|DELETE|/api/0.1/reserve/book/:id|no|
    |Find reserve by ID|GET|/api/0.1/reserve/book/:id|no|
    |List of all reserves|GET|/api/0.1/reserves/book/:finder|no|


## Quick help

* Install modules

```bash
    $ npm install
```

* Check tests

```bash
    $ npm test
```

* Import file format json

```bash
    $ mongoimport -d library -c book --jsonArray data/apiBooks_500.json
```

* Reference URL

    http://mongoosejs.com/
    
    https://www.thoughtworks.com/insights/blog/nosql-databases-overview
    
    https://martinfowler.com/videos.html#data
    
    https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/


* Utils commands to delete indexes of mongo

    db.book.getIndexes();
    
    db.book.dropIndex({"author":1});