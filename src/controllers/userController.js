const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ status : true ,msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.email;
  let password = req.body.password;
  let user = await userModel.findOne({ email: userName, password: password });
  if (!user)
    return res.send({status: false,msg: "username or the password is not correct",});
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "lithium",
      organisation: "FUnctionUp",
    },
    "functionup-lithium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const postMessage = async function (req, res) {
    let message = req.body.message
    let userToBeModified = req.params.userId
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    return res.send({status: true, data: updatedUser})
}

const deleteUser = async function(req,res){
    let userId = req.params.userId
    let deleteUser = await userModel.findByIdAndUpdate({_id:userId},{$set:{isDeleted : true}},{new:true})
    return res.send({status:true,"Deleted user is : ": deleteUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser