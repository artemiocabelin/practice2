let mongoose = require('mongoose');
let path = require('path');
let bids = require('../controllers/bids.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/api/', bids.showSomethings)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
