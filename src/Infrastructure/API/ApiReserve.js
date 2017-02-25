

module.exports = function(api) {


    /**
     * Reserve book
     */
    api.post('/reserve/book', function(req, res) {

        let body = req.body;

        res.json({'reserve a book': '1'});
    });

    /**
     * Update a reservation
     */
    api.put('/reserve/book/:id', function(req, res) {

        let idReservation = req.params.id;
        let body = req.body;

        res.json({'update a reservation': '1'});
    });

    /**
     * Delete a reservation
     */
    api.delete('/reserve/book/:id', function(req, res) {

        let idReservation = req.params.id;
        let body = req.body;

        res.json({'delete a reservation': '1'});
    });


    /**
     * Find a reservation
     */
    api.get('/reserve/book/:id', function(req, res) {

        let idReservation = req.params.id;
        let body = req.body;

        res.json({'find a reservation': '1'});

    });

    /**
     * List all reservations
     */
    api.get('/reserves/book/', function(req, res) {

        res.json({'list all reservations': '1'});

    });

}
