const isHeaderValid = function (req,res,next){
    let isFreeAppUser = req.headers.isfreeappuser
    if(isFreeAppUser){
        next()
    }else{
        res.send('The request is missing a mandatory header')
    }
}

module.exports.isHeaderValid = isHeaderValid