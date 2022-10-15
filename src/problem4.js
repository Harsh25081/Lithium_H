let lodash = require('lodash')
let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let SUBARR = function(){
        let subarray = lodash.chunk(arr,3);
    for(i=0;i<subarray.length;i++){
        console.log("Subarray ",i,"is : ",subarray[i]);
    }
    return true
}

let arr2 = [1,3,5,7,9,11,13,15,17,19]
    let ar2res = lodash.tail(arr2)

let array1 = [1,2,3,4,5]
let array2 = [3,4,5,6,7]
let array3 = [5,6,7,8,9]
let array4 = [7,8,9,10,11]
let array5 = [9,10,11,12,13]
let unionArray = lodash.union(array1,array2,array3,array4,array5)

let pair = [ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth'] ]
let FromPairs = lodash.fromPairs(pair)

module.exports.SUBARR = SUBARR
module.exports.ar2res = ar2res
module.exports.unionArray = unionArray
module.exports.FromPairs = FromPairs