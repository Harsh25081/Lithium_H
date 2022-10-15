let str = "      FunctionUp Cohert     "
let trimstr = str.trim();

let changetoLowerCase = function(){
    return str.toLowerCase();
}

let changetoUpperCase = function(){
    return str.toUpperCase();
}

module.exports.trimstr = trimstr;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changetoUpperCase = changetoUpperCase;