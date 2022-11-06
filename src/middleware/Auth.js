const authMW = function(req,res,next){
    let checkHeader = req.headers["x-auth-token"]
    if(checkHeader){
        req["x-Auth-Token"]= checkHeader
        next()
    }else{
        return res.send({status:false,msg:"Header is not present"})
    }
}

module.exports.authMW = authMW