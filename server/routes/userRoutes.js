// importing express for creating userRouter
const express=require("express");
const userRouter=express.Router();

// importing getAllUsers,fetchDAtaAndStoreData,removeAllusers from controller
const { getAllUsers,fetchDataAndStoreData,removeAllUsers,pagination} = require("../controller/users.controller");

// getting all users details
userRouter.get("/allUser",getAllUsers)

// fetching data and storing in database
userRouter.get("/fetchData",fetchDataAndStoreData)

// deleting all users from database
userRouter.delete("/removeAllUsers",removeAllUsers)





// exporting userRouter
module.exports={userRouter}