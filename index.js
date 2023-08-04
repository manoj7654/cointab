// importing express for creating app
const express=require("express")
const app=express();

// importing connection for making server 
const {connection}=require("./config/db")

// importing dotenv for accessing data from .env file
require("dotenv").config()


// running server on specific port no and connection to database
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connect to MySql Database")
    } catch (error) {
        console.log("Getting Error while connectiong My Sql Database")
    }
    console.log(`Server is listening on port no ${process.env.port}`)
})