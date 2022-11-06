const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthMW = require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",AuthMW.authenticate,AuthMW.authorise, userController.getUserData)
router.put("/users/:userId",AuthMW.authenticate,AuthMW.authorise, userController.updateUser)
router.delete('/users/:userId',AuthMW.authenticate,AuthMW.authorise, userController.deleteUser)


router.post("/users/:userId/posts",AuthMW.authenticate,AuthMW.authorise, userController.postMessage)

module.exports = router;