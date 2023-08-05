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
    street_number:{type:DataTypes.STRING},
    street_name:{type:DataTypes.STRING},
    city:{type:DataTypes.STRING},
    state:{type:DataTypes.STRING},
    country:{type:DataTypes.STRING},
    postcode:{type:DataTypes.STRING},
    latitude:{type:DataTypes.STRING},
    longitude:{type:DataTypes.STRING},
    timezone_offset:{type:DataTypes.STRING},
    timezone_description:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    username:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    salt:{type:DataTypes.STRING},
    md5:{type:DataTypes.STRING},
    sha1:{type:DataTypes.STRING},
    sha256:{type:DataTypes.STRING},
    dob_date: {type:DataTypes.DATE},
    dob_age: {type:DataTypes.INTEGER},
    registered_date: {type:DataTypes.DATE},
    registered_age: {type:DataTypes.INTEGER},
    phone:{type:DataTypes.STRING},
    cell:{type:DataTypes.STRING},
    nino_name:{type:DataTypes.STRING},
    nino_value:{type:DataTypes.STRING},
    picture_large:{type:DataTypes.STRING},
    picture_medium:{type:DataTypes.STRING},
    picture_thumbnail:{type:DataTypes.STRING},
    nat:{type:DataTypes.STRING}
  });
  

// to sync users table with cointab db
connection.sync()

module.exports = UserModel;
