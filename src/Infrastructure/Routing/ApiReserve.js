

module.exports = function(api) {


    /**
     * Reserve book
     */
    api.post('/reserve/book', function(req, res) {

        let body = req.body;

        let AddReservation = require('src/Application/Reservation/Save/AddReservation');

        AddReservation(body, (err, reservation) => {
           if (err) {
               res.status(404).json(err.message);
               return;
           }

           res.json(reservation);
        });
    });

    /**
     * Update a reservation
     */
    api.put('/reserve/book/:id', function(req, res) {

        let UpdateReservation = require('src/Application/Reservation/Save/UpdateReservation');

        let data = [];
        data['id'] = req.params.id;
        data['body'] = req.body;

        UpdateReservation(data, (err, reservation) => {
            if(err) {
                res.status(404).json(err.message);
                return;
            }
            res.json(reservation);
        })
    });

    /**
     * Delete a reservation
     */
    api.delete('/reserve/book/:id', function(req, res) {

        let idReservation = req.params.id;

        let DeleteReservation = require('src/Application/Reservation/Delete/DeleteReservation');

        DeleteReservation(idReservation, (err, reservation) => {
            if(err) {
                res.status(404).json(err.message);
                return;
            }
            res.json(reservation);
        })
    });

}
