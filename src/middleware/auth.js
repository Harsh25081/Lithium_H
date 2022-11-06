const jwt = require("jsonwebtoken")

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]
    if(token){
        req["x-Auth-Token"]=token
        next()
    }else{
        return res.send({status:false,Error : "Header is not Provided,Pls provide it!"})
    }
}


const authorise =async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req["x-Auth-Token"];
    let decodedToken = jwt.verify(token, "functionup-lithium");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    let userId = req.params.userId
    if(userId === decodedToken.userId){
        next()
    }else{
        return res.send({status : false,msg: "You are Not Authorized"})
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise