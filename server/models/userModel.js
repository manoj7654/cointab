// importing DataTypes for defining Data types
const {  DataTypes } = require('sequelize');

// importing connection for defining users schema
const { connection } = require('../config/db');



// define UserModel
const UserModel = connection.define('users', {
    gender:{type:DataTypes.STRING},
    title:{type:DataTypes.STRING},
    first_name:{type:DataTypes.STRING},
    last_name:{type:DataTypes.STRING},
    state:{type:DataTypes.STRING},
    country:{type:DataTypes.STRING},
    postcode:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    dob_age: {type:DataTypes.INTEGER},
    picture_thumbnail:{type:DataTypes.STRING},
   
  });
  

// to sync users table with cointab db
connection.sync()

module.exports = UserModel;
