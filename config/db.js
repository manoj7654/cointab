// importing sequelize for making connection my sql database
const Sequelize=require("sequelize")


// creating connection
const connection=new Sequelize("users","root","Manoj@7654",{
    host:"localhost",
    dialect:"mysql"
})

// exporting connection
module.exports={connection}