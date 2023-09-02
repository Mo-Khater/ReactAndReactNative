import React from "react";
import { useState } from "react";
import "./CSS/first-page.scss";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import Header from "../../Header";
import Footer from "../../Footer";


const FirstStep = () => {
  const [fullName, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/SecondStep", { state: { name: fullName, country, phone, email} });
  };
  const BackHandler = () => { navigate('/') };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    NextHandler();
  };

  return (
    <>
      <Header />
      <div id="firstPage">
        <Navbar props={0} />
        <div className="Background">
          <div className="mainWrapper">
            <p>Contact Information</p>
            <form onSubmit={handleSubmit}>
              <div className="inputWrapper borderbottom">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder="e.g. Kapran James"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper borderbottom">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="e.g. Egypt"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. 01111111111"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. kapran@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="buttonsWrapper">
                <button className="Back" onClick={BackHandler}>
                  Back
                </button>
                <button className="Next" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
          <div className="BackgroundImg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstStep;