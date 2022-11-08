const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongoose = require("mongoose")

let isValidObjectId = function (value){
  if(!mongoose.Types.ObjectId.isValid(value)){
    return false
  }
  else{
    return true
  }
}

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ status: true, msg: savedData });
    } else {
      res.status(400).send({ msg: "Data is Not Provided in body" })
    }
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.email;
    let password = req.body.password;
    let user = await userModel.findOne({ email: userName, password });
    if (!user)
      return res.status(400).send({ status: false, msg: "username or the password is not correct", });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "lithium",
        organisation: "FUnctionUp",
      },
      "functionup-lithium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) return res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let userToBeModified = req.params.userId
    let user = await userModel.findById(req.params.userId)
    if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.status(200).send({ status: true, data: updatedUser })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    if(!isValidObjectId(userId)){return res.status(400).send({msg:"Pls provide a Valid UserId"})}
  let deleteUser = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
  return res.status(200).send({ status: true, "Deleted user is : ": deleteUser })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser