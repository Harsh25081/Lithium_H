const userModel = require("../models/userModel")

const createUser = async function (req,res){
    let isFreeAppUser = req.headers.isfreeappuser
    isFreeAppUser = isFreeAppUser==='true'?true:false;
    let body = req.body
    req.body.isFreeAppUser = isFreeAppUser
    let createUser = await userModel.create(body)
    return res.send(createUser);
}

// const createUser= async function (req, res) {
//     // Remember that inside request object we already know multiple attributes
//     // Examples - body(req.body), query(req.query), params(req.params)
//     let body = req.body
//     let headers = req.headers
//     console.log("The body attribute of this request is: ", body)
//     console.log("The headers attribute of thisd request is: ",headers)
//     let hostValue = headers.host
//     console.log("The host header of this request is: ",hostValue)
//     // Bracket notation is safe to use when dealing with keys that have a hyphen
//     let contentType = headers["content-type"]
//     console.log("The content type header of this request is: ",contentType)
    
//     //Set a header in request
//     req.headers["year"] = 2022
//     console.log("The updated headers attribute of this request is: ",req.headers)
//     res.setHeader("message","Hi there!")
//     res.send({msg: "Hi"})
// }



module.exports.createUser= createUser