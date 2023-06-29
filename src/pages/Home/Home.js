import React, { useContext,useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import "./Home.css"
import { GlobalContext } from '../../Context/GlobalState';


const Home=()=> {
 
  const { setUsers } = useContext(GlobalContext);


  const [userInfo,setUserInfo]=useState({
    id:"",
    name:"",
    email:"",
    contact:"",
    age:"",
    jobrole:"",
  })
  useEffect(()=>{
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        id:uuid(),
      }
    }); 
  },[]);

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        [name]:value
      }
    })
   
  

  };


  const addUser=()=>{
    setUsers((currUsers)=>{
      return [...currUsers,userInfo]

    });
    setUserInfo({
      id:uuid(),
      name:"",
      email:"",
      contact:"",
      age:"",
      jobrole:""
     });
   };
   

useEffect(()=>{
  setUserInfo((currInfo)=>{
    return {
      ...currInfo,
      id:uuid(),

    }
  })

},[])




  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_form_container'>
          <h1 className='home_title'>Add User Information</h1>

           <input type="text" placeholder='enter user id' disabled  value={userInfo.id} onChange={handleChange}/><br/>
           <input type="text" placeholder='enter user name' name="name"  value={userInfo.name} onChange={handleChange}/><br/>
           <input type="email" placeholder='enter email' name="email"  value={userInfo.email} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user contact no' name="contact"  value={userInfo.contact} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user age' name="age"  value={userInfo.age} onChange={handleChange}/><br/>
           <input type="text" placeholder='enter jobrole' name="jobrole"  value={userInfo.jobrole} onChange={handleChange}/><br/>

       <button onClick={addUser}>Add User</button>
        </div>


      </div>

  
    </div>
  )
}

export default Home