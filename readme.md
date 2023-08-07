 # Random Users App

## Introduction
This efficient user management system, developed using Node.js and an SQL database, integrates with the (https://randomuser.me/) API to fetch and store bulk user data. The website features buttons to fetch users, delete records, and a paginated User Detail Page with filtering options. This user-friendly application simplifies data management and organization for diverse business needs.



## Video Walkthrough of the Project

[Demo](https://drive.google.com/file/d/1p4ASoD6CpV8_g_E5HZl11edKh0GLgb3y/view?usp=sharing)

## Features

* Fetch Users: Fetch bulk data (around 50-100 records) from the (https://randomuser.me/) API and store it in the SQL database with a single click.

* Delete Users: Remove all user records from the database with confirmation before deletion.

* User Details: Open a User Detail Page that displays user data in a paginated and filtered table view.

## Design Decisions or Assumptions

* The project assumes that the database connection details are correct and the database is up and running.

* It is assumed that the (https://randomuser.me/) API is accessible and provides the required user data.

* The website is designed to handle concurrent fetches gracefully by using a flag to indicate ongoing data fetches.

## Installation & Getting Started
To run the project on your local machine, follow these steps:

`Clone the repository.`

      git clone https://github.com/manoj7654/cointab.git

* Install dependencies using 

        npm i

* Set up your MySQL database and update the connection details in config/db.js.

`for backend`
 * Go to backend folder
 
        cd server
   
* Start the server using

          npm run server

`for frontend`
* Go to frontend folder

          cd client

* Start the server using 
    
         npm start
* Access the website at http://localhost:3000 in your browser.

## Usage
* Click the "Fetch Users" button to fetch bulk user data from the (https://randomuser.me/) API and store it in the database.

* Click the "Delete Users" button to remove all user records from the database with confirmation.

* Click the "User Details" button to open the User Detail Page, displaying user data in a paginated and filtered table view.

## APIs Used

This (https://randomuser.me/) APIs is used to fetch random user data for populating the user management system.

## API Endpoints

`for fetching and stroing data in database`

* method : GET
* Endpoint : users/fetchData
* Status : 200
* Response : Users fetched and stored in Database successfull

`for getting users details`

* method : GET
* Endpoing : /users/allUsers
* Status : 200
* Response : It will return all users with users details

`for deleting all users from database`

* method : DELETE
* Endpoint : /users/removeAllUsers
* Status : 200 
* Response : All users deleted successfully


## Technology Stack
* Node.js: Backend framework for server-side operations.
* Express.js: Web application framework for Node.js.
* MySQL: SQL database for storing user data.
* Sequelize: ORM (Object-Relational Mapping) for database 
interactions.
* Reactjs: For frontent

## Screenshots (Optional)

`Home Page`
![Screenshot (586)](https://github.com/manoj7654/cointab/assets/107467981/c7a36e66-25b6-444a-a7f2-01677cd014f6)

`User Details Page`

![Screenshot (587)](https://github.com/manoj7654/cointab/assets/107467981/6cba2f17-459d-4063-a3ca-791d9b339a95)

 `Filter by male`

![Screenshot (588)](https://github.com/manoj7654/cointab/assets/107467981/e69ede9d-d878-41f2-bc9f-46ab9d35dc14)

`Filter by female`
![Screenshot (589)](https://github.com/manoj7654/cointab/assets/107467981/0c5de83d-10c5-492f-bf3d-ce71cedd21be)

 `Filter by country`
![Screenshot (590)](https://github.com/manoj7654/cointab/assets/107467981/86aff483-f808-42b7-8d40-0781d97d94bf)

`After deleting all usere`
![Screenshot (591)](https://github.com/manoj7654/cointab/assets/107467981/ce7732e3-b281-4ad5-9ee6-63f271184b8f)




