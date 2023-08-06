import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Home.css" 
import UserDetails from "./UserDetails";
const Home = () => {
 
  

let isFetching=false
  async function fetchDataAndStore() {
    try {

      if(isFetching){
        alert("Fetching is already in progress")
      }

      isFetching=true

      const result = await fetch("http://localhost:4500/users/fetchData",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      
      const res = await result.json();
     if(result.ok){
      alert(res.message)
     }
     isFetching=false
    
    } catch (error) {
      console.log(error);
      isFetching=false
      
    }
  }
  const handleFetch=()=>{
    fetchDataAndStore()
 }


async function deleteData(){
    try {
      const confirmed = window.confirm("Are you sure you want to delete all users?");
      if (!confirmed) {
        // User clicked Cancel, do nothing
        return;
      }
        const result=await fetch("http://localhost:4500/users/removeAllUsers",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const res=await result.json()
       if(result.ok){
        alert(res.message)
        // GetData()
       }
    } catch (error) {
        console.log(error)
    }
}
const handleRemove=()=>{
    deleteData()
   
}
  // useEffect(() => {
  //   return ()=>{
  //     setToggle(false)
  //   }
  // }, []);

  return  (
    <div >
      <div className="main">
        <button className="btns" onClick={handleFetch}>Fetch Users</button>
        <button  className="btns" ><Link to="/userDetails" className="link">User Details</Link></button>
        <button  className="del_btn" onClick={handleRemove}>Delete Users</button>
      </div>
   
    </div>
  );
};

export default Home;
