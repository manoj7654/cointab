// importing express for creating app
const express=require("express")
const app=express();

// importing connection for making server 
const {connection}=require("./config/db");
const { userRouter } = require("./routes/userRoutes");

// importing dotenv for accessing data from .env file
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("Home page of this api")
})

app.use("/users",userRouter)

// running server on specific port no and connection to database
app.listen(process.env.port,async()=>{
    try {
        console.log(`Server is listening on port no ${process.env.port}`)
    } catch (error) {
        console.log("Getting Error while running server")
    }
  
})