import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './css/register.css'
function Login() {
    const Navigate = useNavigate();
    const [values, setvalues] = useState({
      email: "",
      password: "",
    });
    const [error, seterror] = useState("");
    const handleinput = (e) => {
      setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handlesubmit = (e) => {
      e.preventDefault();
      const jsonData = JSON.stringify(values);
      axios
        .post("http://localhost:3002/login", jsonData, {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        })
        .then((res) => {
         const {token}=res.data;
         localStorage.setItem('token',token);
          Navigate("/");
        })
        .catch((err) => {
            let error;
            let message;
        Array.isArray(err.response.data)?
             {message} = err.response.data[0]:{error}=err.response.data;
          error?seterror(error):seterror(message);
        });
    };
  return (
    <>
    <header className="headerlog">
    <a href="/" >CREATOR</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
        <li><Link  to='/' className='a1'>HOME</Link></li>
        <li><Link to='/about' className='a1'>ABOUT</Link></li>
        </ul>
    </nav>
    </header> 
    <form method='post' onSubmit={handlesubmit} className='form'>
        <div className='container'>
        <div className="box">
      <input type='email' name='email' id='email' onChange={handleinput} placeholder='Email:'></input>
      </div>
      <div className="box">
      <input type='password' name='password' id='password' onChange={handleinput} placeholder='password:'></input>
      </div>
      <p className="msg">{error}</p>
        <button type='submit'>Login</button>
        <div className='reglink'>
        <Link to="/register" className='link'>register</Link>
        </div>
        </div>
    </form>
    </>
  )
}

export default Login