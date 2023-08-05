// importing express for creating userRouter
const express=require("express");
const userRouter=express.Router();

// importing getAllUsers,fetchDAtaAndStoreData,removeAllusers from controller
const { getAllUsers,fetchDataAndStoreData,removeAllUsers,pagination, filterData} = require("../controller/users.controller");

// getting all users details
userRouter.get("/allUser",getAllUsers)

// fetching data and storing in database
userRouter.get("/fetchData",fetchDataAndStoreData)

// deleting all users from database
userRouter.delete("/removeAllUsers",removeAllUsers)

// for pagination
userRouter.get("/pagination",pagination)

// for filter data
userRouter.get("/filterData",filterData)


// exporting userRouter
module.exports={userRouter}