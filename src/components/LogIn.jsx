import React from 'react'
import "../Stylesheets/logIn.css"
import { Link ,useNavigate} from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate();

    const [userData,setUserData] = useState({password:"",email:""});

    const onChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  const getUserData = async () => {
    const data = await fetch(`http://localhost:5000/api/auth/login`,{
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
      setUserData({password:"Wrong Input",email:"Wrong Input"});
    }
}

  const onSubmit = (e)=>{
    e.preventDefault();
    getUserData();
  }
  return (
    <div className='center'>
        <form className="form">
        <div className="header">Sign In</div>
        <div className="inputs">
        <input placeholder="Email" className="input" type="text" name='email' value={userData.email} onChange={onChange}/>
          <input placeholder="Password" className="input" type="password" name='password' value={userData.password}  onChange={onChange}/>
          <button className="sigin-btn">Submit</button>
          <p className="signup-link" onClick={onSubmit}>Don't have an account? <Link className='signUp' to="signUp">Sign up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LogIn
