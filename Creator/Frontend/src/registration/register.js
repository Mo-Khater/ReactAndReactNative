import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './css/register.css'
function Register() {
  const Navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
    fullname:"",
  });
  const [error, seterror] = useState("");
  const handleinput = (e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(values);
    axios
      .post("http://localhost:3002/register", jsonData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      })
      .then((res) => {
        Navigate("/login");
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
    <> <header className="hh">
    <a href="/" className="Brand">CREATOR</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
        <li><Link className="a" to='/'>HOME</Link></li>
                    <li><Link className="a" to='/about'>ABOUT</Link></li>
        </ul>
    </nav>
    </header> 
    <form method="post" onSubmit={handlesubmit} className='form'>
    <div className="container">
        <div className="box">
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Fullname:"
        onChange={handleinput}
      ></input>
      </div>
        <div className="box">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email:"
        onChange={handleinput}
      ></input>
      </div>
      <div className="box">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password:"
        onChange={handleinput}
      ></input>
      </div>
      <p className="msg">{error}</p>
      <button type="submit">register</button>
      <div className="reglink">
      <Link to="/login" className="link">login</Link>
      </div>
      </div>
    </form>
    </>
  );
}

export default Register;
