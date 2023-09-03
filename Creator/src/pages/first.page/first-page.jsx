import React from "react";
import { useState } from "react";
import "./CSS/first-page.scss";
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from 'react-router-dom';
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";


const FirstPage = () => {
  const [fullName, setName] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [LinkedIn, setLinked] = useState("");
  const [Protfolio, setPortfolio] = useState("");

  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Education", { state: { name: fullName, address, Phone, email, LinkedIn, Protfolio } });
  };
  const BackHandler = () => { navigate('/') };
  return (
    <>
      <Header />
      <div id="firstPage">
        <Navbar props={0} />
        <div className="Background">
          <div className="mainWrapper">
            <p>Contact Information</p>
            <div className="inputWrapper borderbottom">
              <label for="fullName">FullName</label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="e.g. Kapran James"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="inputWrapper borderbottom">
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="e.g. Giza Haram"
                required
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <div className="linksWrapper">
              <div className="inputWrapper">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. 01111111111"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. kapran@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label for="linked">LinkedIn</label>
                <input
                  type="url"
                  id="linked"
                  placeholder="e.g. https://www.linkedin.com/in/KapranJames/"
                  required
                  onChange={(e) => setLinked(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label for="porto">Portfolio Link</label>
                <input
                  type="url"
                  id="porto"
                  required
                  placeholder="e.g. Portfolio@Kapran.com"
                  onChange={(e) => setPortfolio(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="buttonsWrapper">
              <button className="Back" onClick={BackHandler}>
                Back
              </button>
              <button className="Next" onClick={NextHandler}>
                Next
              </button>
            </div>
          </div>
          <div className="BackgroundImg">
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstPage;
