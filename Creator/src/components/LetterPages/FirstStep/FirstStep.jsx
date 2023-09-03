import React from "react";
import { useState } from "react";
import "./CSS/first-page.scss";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import Header from "../../PageStructure/Header";
import Footer from "../../PageStructure/Footer";

let data;

const FirstStep = () => {
  const [fullName, setName] = useState(data?.name||"");
  const [country, setCountry] = useState(data?.country||"");
  const [phone, setPhone] = useState(data?.phone||"");
  const [email, setEmail] = useState(data?.email||"");

  const navigate = useNavigate();
  const NextHandler = () => {
    data = { name: fullName, country, phone, email };
    navigate("/SecondStep", { state: { name: fullName, country, phone, email} });
  };
  const BackHandler = () => { navigate('/') };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
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