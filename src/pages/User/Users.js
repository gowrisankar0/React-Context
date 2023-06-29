import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState';
import { Link } from "react-router-dom";
import User from "../../components/User/User"

function Users() {

    const { users,setUsers } = useContext(GlobalContext);
   const deleteUser =(id)=>{
    setUsers((currusers)=>{
      return currusers.filter((user)=>user.id!==id);
   })
  }
    return (


      <div className='users'>


        <h1 className='users_title'>Users</h1>
        <div className='user_container'>
          {
            users.length === 0 ? (
              <div className='users_empty'>

                <h1>No users Found</h1>
                <h3>
                  <Link to="/">Add users</Link>
                </h3>
              </div>
            ) : (
                 users.map((users)=>{
                  return(
                    <User
                    key={users.id}
                    id={users.id}
                    name={users.name}
                    jobRole={users.jobRole}
                    age={users.age}
                    contact={users.contact}
                    email={users.email}
                    deleteUser={()=>deleteUser(users.id)}
                    
                    
                    />



                  )
                  
                 })
            )
          }
        </div>
      </div>
    )
  
}
export default Users