const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: {
        type : String,
        required : true}, 
    category: String, 
    price: {
        type : String,
        required : true
    },
    isDeleted: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Productdata', productSchema)