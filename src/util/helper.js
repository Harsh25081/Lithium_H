let date = new Date()
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let getmonth = month[date.getMonth()]

let getBatchInfo = function(){
    console.log('Lithium, W3D5, the topic being for today is Nodejs Module system')
    return true;
}

module.exports.date = date
module.exports.month = getmonth
module.exports.getBatchInfo = getBatchInfo