const axios = require("axios")

const GetWeather = async function(req,res){
    try {
        let q = req.query.q
        let appid = req.query.appid
        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let temp = await axios(options)
        res.status(200).send({"name":temp.data.name,"temp":temp.data.main.temp})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

const GetWeatherAndSort = async function(req,res){
    try {
        let result = []
        let cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        for (let i = 0; i < cities.length; i++) {
            const q = cities[i];
            let appid = req.query.appid
        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let temp = await axios(options)
        result.push({"name":temp.data.name,"temp":temp.data.main.temp})
        }
        let sortedData = result.sort(
            function(x, y){return x.temp - y.temp}
            )
        res.status(200).send({data : sortedData})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}


module.exports.GetWeather = GetWeather
module.exports.GetWeatherAndSort = GetWeatherAndSort