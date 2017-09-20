let mongoose = require('mongoose');
let path = require('path');
let bids = require('../controllers/bids.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/api/bids', bids.getAllBids)
    app.post('/api/bids/create', bids.createBidderInSession)
    app.post('/api/bids/product1/submit', bids.submitBidToProduct1)
    app.get('/api/bids/product1/getAll', bids.getAllBiddersFromProduct1)
    app.post('/api/bids/product2/submit', bids.submitBidToProduct2)
    app.get('/api/bids/product2/getAll', bids.getAllBiddersFromProduct2)
    app.post('/api/bids/product3/submit', bids.submitBidToProduct3)
    app.get('/api/bids/product3/getAll', bids.getAllBiddersFromProduct3)
    app.get('/api/bids/logout', bids.logoutUser)
    app.get('/api/bids/checksession', bids.checkIfUserInSession)
    app.get('/api/bids/clearall', bids.clearAllBidders)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
