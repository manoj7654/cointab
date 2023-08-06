import React from 'react'

const User = ({Id,Title,First_Name,Last_Name,Gender,Email,State,Country,Postcode,Dob_Age,Picture}) => {
  return (
   
      <tr key={Id}>
            <td>{Id}</td>
            <td>{Title}</td>
            <td>{First_Name}</td>
            <td>{Last_Name}</td>
            <td>{Gender}</td>
            <td>{Email}</td>
            <td>{State}</td>
            <td>{Country}</td>
            <td>{Postcode}</td>
            <td>{Dob_Age}</td>
            <td>
                <img src={Picture} alt={First_Name} />
            </td>
           
           
          </tr>
  
 
  )
}

export default User