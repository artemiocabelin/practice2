// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Bid = mongoose.model('Bid'); // change as needed

module.exports = {
    getAllBids : function(request, response) {
        Bid.find({}, function(error, bids) {
            if (error) {
                console.log(error);
            } else {
                response.json(true);
            }
        });
    },

    createBidderInSession : (request, response) => {
        console.log('server creating bidder in session');
        request.session.bidder = request.body.username;
        response.json(request.session.bidder);
    },

    submitBidToProduct1 : (request, response) => {
        console.log('server submitting bid to product 1');
        bid = new Bid({name: request.session.bidder, price: request.body.price, productNumber: 1});
        bid.save((error, savedBid) => {
            if (error) {
                console.log('server error submitting bid to product 1')
            } else {
                console.log('server success submitting bid to product 1')
                response.json(savedBid);
            }
        });
    },

    getAllBiddersFromProduct1: (req, res) => {
        Bid.find({productNumber: 1})
            .sort("-price")
            .exec((error, bidders) => {
                if(error) {
                    console.log('error getting bidders')
                    console.log(error);
                } else {
                    console.log('success getting  1 bidders')
                    res.json(bidders);
                }
            })
    },
    submitBidToProduct2 : (request, response) => {
        console.log('server submitting bid to product 2');
        bid = new Bid({name: request.session.bidder, price: request.body.price, productNumber: 2});
        bid.save((error, savedBid) => {
            if (error) {
                console.log('server error submitting bid to product 2')
            } else {
                console.log('server success submitting bid to product 2')
                response.json(savedBid);
            }
        });
    },

    getAllBiddersFromProduct2: (req, res) => {
        Bid.find({productNumber: 2})
            .sort("-price")
            .exec((error, bidders) => {
                if(error) {
                    console.log('error getting bidders')
                    console.log(error);
                } else {
                    console.log('success getting  2 bidders')
                    res.json(bidders);
                }
            })
    },
    submitBidToProduct3 : (request, response) => {
        console.log('server submitting bid to product 3');
        bid = new Bid({name: request.session.bidder, price: request.body.price, productNumber: 3});
        bid.save((error, savedBid) => {
            if (error) {
                console.log('server error submitting bid to product 3')
            } else {
                console.log('server success submitting bid to product 3')
                response.json(savedBid);
            }
        });
    },

    getAllBiddersFromProduct3: (req, res) => {
        Bid.find({productNumber: 3})
            .sort("-price")
            .exec((error, bidders) => {
                if(error) {
                    console.log('error getting bidders')
                    console.log(error);
                } else {
                    console.log('success getting  3 bidders')
                    res.json(bidders);
                }
            })
    },

    logoutUser: (req, res) => {
        console.log('deleting session');
        delete req.session.bidder;
        res.json(true);
    },

    checkIfUserInSession: (req, res) => {
        console.log('check if user in session');
        if(req.session.bidder) {
            res.json(req.session.bidder);
        } else {
            res.json(false);
        }
    },

    clearAllBidders: (req, res) => {
        console.log('clearing all');
        Bid.remove({}).exec(error => {
            res.json(true);
        }
        )
    }
    
}