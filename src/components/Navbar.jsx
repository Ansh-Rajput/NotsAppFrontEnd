import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../Stylesheets/navbar.css"

const Navbar = (props) => {

    const location = useLocation();

    useEffect(()=>{
        console.log(location);
    },[location]);

    const {mode,setMode,toggleMode} = props;
    const element = document.querySelector("header nav ul li:hover::before");

    let style = {backgroundColor:"#fff",color:"#000"};
    if(mode === "light"){
        style = {backgroundColor:"#fff",color:"#000"};
        // element.color = "#000";
    }
    else{
        style = {backgroundColor:"#1B1B1B",color:"#fff"};
        // element.color = "#fff";
    }
    
    return (
    <>
        <header id="myHeader" style={{...style,boxShadow:" 0 0 1rem 0 black"}}>
            <div className="title">
                {props.title}
            </div>
            <nav>
                <ul>
                    <li> <Link to="/" className="link" style={{height:"7rem",color:`${style.color}`}}> Home</Link></li>
                    <li> <Link to="/about" className="link" style={{height:"7rem",color:`${style.color}`}}> About</Link></li>
                    <li> <Link to="/about" className="link" style={{height:"7rem",color:`${style.color}`}}> Servisis</Link></li>
                </ul>
            </nav>
            <div className="toggle">
                <input type="checkbox" name="checkbox" id="checkbox" onClick={toggleMode} />
                <label htmlFor="checkbox" className='switch'></label>
                <i className="far fa-solid fa-circle-user" style={{fontSize:"20rem"}}></i>
                <Link to="/logIn" className="link" style={{color:`${style.color}`}} >
                    <ion-icon className='icon' name="person-circle-outline"></ion-icon>
                </Link>
                {/* <ion-icon className='icon' name="log-in-outline"></ion-icon> */}
            </div>
        </header>
    </>
  )
}

export default Navbar
