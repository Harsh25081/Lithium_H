const userModel = require("../models/userModel")

const createUser = async function (req,res){
    let body = req.body
    let createUser = await userModel.create(body)
    return res.send(createUser);
}


module.exports.createUser= createUser