const mongoose = require('../config/db');
const ProductSchema = mongoose.Schema({
    productId: Number,
    name :String,
    description: String,
    price :Number,
    quantity:Number,
    totalamount:Number
})

let Product = mongoose.model('Product',ProductSchema);
module.exports = Product;