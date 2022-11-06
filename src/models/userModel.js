const mongoose = require("mongoose")

const userAuthSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : String,
    email : String,
    password  : String,
    gender : {
        type : String,
        enum : ["male","female","others"]
    },
    age : Number,
    isDeleted : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

module.exports = mongoose.model("AuthUser",userAuthSchema)