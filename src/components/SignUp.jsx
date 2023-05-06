import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  const [userData,setUserData] = useState({name:"",password:"",email:""});

  const onChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  const getUserData = async () => {
      const data = await fetch(`http://localhost:5000/api/auth/createUser`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
      });
      const responce = await data.json();
      console.log(responce);
      if(responce.status){
        localStorage.setItem("token",responce.token);
        navigate("/");
      }
      else{
        setUserData({name:"Wrong Input",password:"Wrong Input",email:"Wrong Input"});
      }
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    getUserData();
    // setUserData({name:"",password:"",email:""});
  }


  return (
    <div className='center'>
        <form className="form">
        <div className="header">Sign Up</div>
        <div className="inputs">
          <input placeholder="Name" className="input" type="text" name='name' value={userData.name} onChange={onChange}/>
          <input placeholder="Email" className="input" type="text" name='email' value={userData.email} onChange={onChange}/>
          <input placeholder="Password" className="input" type="password" name='password' value={userData.password}  onChange={onChange}/>
          <button className="sigin-btn" onClick={onSubmit}>Submit</button>
          <p className="signup-link">Have an account? <Link className='signUp' to="../logIn">LogIn</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
