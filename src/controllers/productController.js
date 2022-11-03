const productModel = require("../models/productModel")

const createProduct = async function (req,res){
    let body = req.body
    let createProduct = await productModel.create(body)
    return res.send({"Product created is : ":createProduct})
}

const getProductData = async function(req,res){
    let productdata = await productModel.find()
    return res.send({"All Product Data is: ":productdata})
}


// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }


module.exports.createProduct = createProduct
module.exports.getProductData = getProductData