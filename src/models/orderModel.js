const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema =new mongoose.Schema({
    userId : {
        type : ObjectId,
        ref : "Userdata"
    },
    productId : {
        type : ObjectId,
        ref : "Productdata"
    },
    amount : Number,
    isFreeAppUser : {
        type : Boolean,
        default : false
    },
    date : String
})

module.exports = mongoose.model("Orderdata",orderSchema)