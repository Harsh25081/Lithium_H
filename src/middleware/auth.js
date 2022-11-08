const jwt = require("jsonwebtoken")

const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        if (token) {
            req["x-Auth-Token"] = token
            next()
        } else {
            return res.status(400).send({ status: false, Error: "Header is not Provided,Pls provide it!" })
        }
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


const authorise = async function (req, res, next) {
    try {
        let token = req["x-Auth-Token"];
        let decodedToken = jwt.verify(token, "functionup-lithium");
        if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
        let userId = req.params.userId
        if (userId === decodedToken.userId) {
            next()
        } else {
            return res.status(403).send({ status: false, msg: "You are Not Authorized" })
        }
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise