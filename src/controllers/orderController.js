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
        let isFreeAppUser = req.body.isFreeAppUser
        if(isFreeAppUser){
            req.body.amount = 0;
            let savedData= await orderModel.create(body)
            return res.send({data: savedData})
        }else{
            let checkdata = await productModel.findById(productId).select({price:1,_id:0})
            let price = checkdata.price
            let checkBalance = await userModel.findByIdAndUpdate({_id : userId},
                {$inc:{balance:-price}},
                {new:true}).select({balance:1,_id:0})
            req.body.amount = price
            let orderdata = await orderModel.create(body)
            res.send({"msg":orderdata})
        }

        
    }
}

module.exports.createOrder= createOrder
