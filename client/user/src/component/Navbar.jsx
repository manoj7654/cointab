import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div style={{
    height:"50px", 
    padding: "10px",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "grey",
    borderRadius: "5px",
    fontSize: "1.5rem",
    color: "white"}}>
  <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link>
    </div>
  )
}

export default Navbar