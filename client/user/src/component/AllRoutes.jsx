import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import UserDetails from '../pages/UserDetails'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/userDetails" element={<UserDetails/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes