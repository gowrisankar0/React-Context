import React from 'react'
import "./User.css"
const User = ({ id, name, age, email, contact, jobRole, deleteUser }) => {
    return (
        <div className='user'>
         <h2>
            id:<span>{id}</span>
         </h2>
         <h3>
            Name:<span>{name}</span>
         </h3>
         <h3>
            Age:<span>{age}</span>
         </h3>
         <h3>
            Email:<span>{email}</span>
         </h3>
         <h3>
            Contact:<span>{contact}</span>
         </h3>
         <h3>
            ROle:<span>{jobRole}</span>
         </h3>
     <div className='user_bottom'>

   <button className='user_delete' onClick={deleteUser}>Delete</button>

     </div>





        </div>
    )
}

export default User