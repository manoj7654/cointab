//  importing fetch for fetching data from api
const fetch=require("node-fetch")

// importing usermodel for store data and retrieve data
const UserModel = require("../models/userModel")


// fetching data and storing in database
const fetchDataAndStoreData = async(req,res)=>{
  let isFetchingData = false;
    try {

      // if fetching data in progress then it will throw an error
      if(isFetchingData){
        return res.status(200).json({ message: 'Data fetch and store operation is already in progress.' });
      }
          // Set the flag to true to indicate data fetch and store operation has started
          isFetchingData = true;


        const result=await fetch("https://randomuser.me/api/?results=50")
        const data=await result.json()
        const users = data.results
      

        users.map( async ele=>{
            let final={
                gender: ele.gender,
                title: ele.name.title,
                first_name: ele.name.first,
                last_name: ele.name.last,
                street_number: ele.location.street.number,
                street_name: ele.location.street.name,
                city: ele.location.city,
                state: ele.location.state, 
                country: ele.location.country,
                postcode: ele.location.postcode,
                latitude: ele.location.coordinates.latitude,
                longitude: ele.location.coordinates.longitude,
                timezone_offset: ele.location.timezone.offset,
                timezone_description: ele.location.timezone.description,
                email: ele.email,
                username: ele.login.username,
                password: ele.login.password,
                salt: ele.login.salt,
                md5: ele.login.md5,
                sha1: ele.login.sha1,
                sha256: ele.login.sha256,
                dob_date: new Date(ele.dob.date),
                dob_age: ele.dob.age,
                registered_date: new Date(ele.registered.date),
                registered_age: ele.registered.age,
                phone: ele.phone,
                cell: ele.cell,
                nino_name: ele.id.name,
                nino_value: ele.id.value,
                picture_large: ele.picture.large,
                picture_medium: ele.picture.medium,
                picture_thumbnail: ele.picture.thumbnail,
                nat: ele.nat
            }
            await UserModel.create(final)
        })
        // Reset the flag to indicate the operation is complete
        isFetchingData = false;
   
    res.status(200).json({ message: 'Users fetched and stored in Database successfully.' });
    } catch (error) {
      console.error('An error occurred while fetching and storing users:', error);
      res.status(500).json({ "message": 'Getting while fetching and storing users.' });
    }
}


// Retrieve all data from the database
const getAllUsers  = async (req, res) => {
  try {
    
      let page = req.query.page || 1;
      const { gender, country } = req.query;
  
      // Prepare the filtering options based on the query parameters
      const filterData = {};
      if (gender) {
        filterData.gender = gender;
      }
      if (country) {
        filterData.country = country;
      }
  
      // Fetch the paginated data using Sequelize's findAll with filtering and pagination options
      const result = await UserModel.findAndCountAll({
        where: filterData,
        limit: 10,
        offset: (page - 1) * 10,
      });
  
      let Total_Page=Math.ceil(result.count/10)
      res.set("X-Total-Count",Total_Page)


      const total = {
        currentPage: page,
        total_pages: Total_Page,
        results: result.rows,
      };
  
    
    res.status(200).json(total);
  } catch (error) {
    console.error('An error occurred while retrieving users:', error);
    res.status(500).json({"message":"Getting error while retrieving users."})
  }
};


// Delete all users from the database
const removeAllUsers = async (req, res) => {
  try {
    await UserModel.destroy({ where: {} });
    res.status(200).json({ "message": 'All users deleted successfully.' });
  } catch (error) {
    console.error('An error occurred while deleting users:', error);
    res.status(500).json({ "message": 'Getting error while deleting users.' });
  }
};


module.exports={getAllUsers,fetchDataAndStoreData,removeAllUsers}