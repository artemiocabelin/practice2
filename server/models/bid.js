let mongoose = require('mongoose');

var BidSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    productNumber: {
        type: Number,
    }
    
})

var Bid = mongoose.model('Bid', BidSchema);