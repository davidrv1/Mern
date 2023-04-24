const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Title is required'],
        minLength: [3, 'Title must be three or more characters'],
        maxLength:[50, 'Title is too long']
    },
    price:{
        type: Number,
        required:[true, 'Price is required'],
        min:[0.1, 'Nothing is free.']
    },
    description: {
        type: String,
        required:[true, 'Description is required'],
        minLength: [3, 'Description must be three or more characters'],
        maxLength:[50, 'Description is too long']
    }
}, {timestamps:true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;