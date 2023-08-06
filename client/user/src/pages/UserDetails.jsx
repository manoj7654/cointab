import React, { useEffect } from 'react'
import { useState } from 'react';
import "./UserDetails.css"

import User from '../component/User';
import Pagination from '../component/Pagination';
const UserDetails = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [filter,setFilter]=useState("")
  const [page,setPage]=useState(1)
const [result,setResult]=useState("")
const [country, setCountry] = useState(null)
  async function GetData(query) {
    setLoading(true)
    try {
      const result = await fetch(`http://localhost:4500/users/allUser${query}`);
      const res = await result.json();
      let total=res.total_pages;
     
      setResult(total)
    setData(res.results)
    // console.log(res)
    setLoading(false)
    } catch (error) {
      console.log(error);
      setErr(true)
      setLoading(false)
    }
  }

 useEffect(()=>{
  let query="?"
  if(filter){
    query+=`gender=${filter}`
  }
  if(country){
    query+=`&country=${country}`
  }

  if(page){
    query+=`&page=${page}`
 
  }
  GetData(query)

 },[filter,page,country])

const handleChange=(value)=>{
setPage(page+value)
}

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Getting Error while fetching data</h1>
  ) : (
    <>

    <div  className="fetch">
      <label htmlFor="">Gender : </label>
      <select name="" id="" onChange={(e)=>setFilter(e.target.value)}>
        <option value="#">--select gender---</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="">Country : </label>
      <select name="" onChange={(e)=>setCountry(e.target.value)} >
        <option value="#">select country</option>
        <option value="India">India</option>
        <option value="Ireland">Ireland</option>
        <option value="Australia">Australia</option>
        <option value="Germany">Germany</option>
        <option value="Iran">Iran</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Turkey">Turkey</option>
        <option value="Brazil">Brazil</option>
        <option value="France">France</option>
        <option value="Netherlands">Netherlands</option>
      </select>
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>State</th>
            <th>Country</th>
            <th>Postcode</th>
            <th>Age</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.length>0&&data.map((ele)=>{
            return(
              <User
              key={ele.id}
                Id={ele.id}
                Title={ele.title}
                First_Name={ele.first_name}
                Last_Name={ele.last_name}
                Gender={ele.gender}
                Email={ele.email}
                State={ele.state}
                Country={ele.country}
                Postcode={ele.postcode}
                Dob_Age={ele.dob_age}
                Picture={ele.picture_thumbnail}
              />
            )
          })}
        </tbody>
        </table>
    </div>
    {data.length<=0&&<div className='head'><h1>There is no data</h1></div>}
    <Pagination page={page} handleChange={handleChange} result={result} />
    </>
  )
}

export default UserDetails