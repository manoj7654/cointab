import React from 'react'
import "./pagination.css"
const Pagination = ({page,handleChange,result}) => {
  return (
    <div className='btn' >
        <button className='page' disabled={page==1} onClick={()=>handleChange(-1)}>PREV</button>
      <button className='dis' disabled={page==1} >{page}</button>
      <button className='page' disabled={page==result} onClick={()=>handleChange(1)}>NEXT</button>
    </div>
  )
}

export default Pagination