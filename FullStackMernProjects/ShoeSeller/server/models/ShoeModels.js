const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Title is required'],
        minLength: [3, 'Title must be three or more characters'],
        maxLength:[50, 'Title is too long']
    },
    shoeSize:{
        type: Number,
        required:[true, 'Price is required'],
        min:[3, 'Must  be at least a size 3.']
    },
    price: {
        type: Number,
        required:[true, 'Price is required'],
        min:[0.01, 'Nothing is free.']
    }
}, {timestamps:true});

const Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;