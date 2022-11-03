const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController = require("../controllers/orderController")
const headervalidationMW = require ("../middlewares/headervalidationMW")

router.post("/createProduct",ProductController.createProduct)
router.get("/getProductData",ProductController.getProductData)

router.post("/createUser",headervalidationMW.isHeaderValid,UserController.createUser)

router.post("/createOrder",headervalidationMW.isHeaderValid,OrderController.createOrder)

module.exports = router;