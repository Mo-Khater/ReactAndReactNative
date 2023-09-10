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
        <body className="forloggin">
   <div class="login-box">
        <div class="login-header">
            <header>Login</header>
        </div>
        <div class="input-box">
        <input
        type="text"
        name="fullname"
        className="input-field"
        id="fullname"
        placeholder="Fullname:"
        onChange={handleinput}
      ></input>
        </div>
        <div class="input-box">
        <input
        type="email"
        name="email"
        id="email"
        className="input-field"
        placeholder="Email:"
        onChange={handleinput}
      ></input>
        </div>
        <div className="input-box">
        <input
        type="password"
        name="password"
        id="password"
        className="input-field"
        placeholder="password:"
        onChange={handleinput}
      ></input>
        </div>
        <div class="forgot">
            <section>
              <input type="checkbox" id="check"></input>
                <label for="check">Remember me</label>
            </section>
            <section>
                <a href="#">Forgot password</a>
            </section>
        </div>
        <p className="msg">{error}</p>
        <div class="input-submit">
        <button type="submit" class="submit-btn" id="submit" onClick={handlesubmit}></button>
            <label for="submit">Sign up</label>
        </div>
        
        <div class="sign-up-link">
            <p>Have account?<Link to="/login" className="link">Sign in</Link></p>
        </div>
    </div>
    </body>
  );
}

export default Register;
