const { count } = require("console")
const orderModel= require("../models/orderModel.js")
const productModel = require("../models/productModel.js")
const userModel = require("../models/userModel.js")

const createOrder= async function (req, res) {
    let body = req.body
    let userId = body.userId
    let productId = body.productId
    let checkuserId = await userModel.findById(userId);
    let checkproductId = await productModel.findById(productId);
    if(!checkuserId){return res.send({"Error : ":" UserId is Invalid"})}
    else if(!checkproductId){return res.send({"Error : ":" ProductId is Invalid"})}
    else{
        let savedData= await orderModel.create(body)
        return res.send({data: savedData})
    }
}

module.exports.createOrder= createOrder
