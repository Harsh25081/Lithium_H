const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const AuthenMW = require("../middleware/Auth.js")

router.post("/users",userController.registerUser)
router.post("/login",userController.loginUser)

router.get("/users/:userId",AuthenMW.authMW,userController.fetchUserData)
router.put("/users/:userId",AuthenMW.authMW,userController.updateData)

router.delete("/users/:userId",AuthenMW.authMW,userController.deleteUser)

module.exports = router;















// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

// module.exports = router;