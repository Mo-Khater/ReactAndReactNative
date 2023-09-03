import React from "react";
import { useContext } from "react";
import "./CSS/first-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";
import { StateContext } from "../../components/App";


const FirstPage = () => {
  const { fullName, setName, address, setAddress, Phone, setPhone, email, setEmail, LinkedIn, setLinked, Protfolio, setPortfolio } = useContext(StateContext);


  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Education");
  };
  const BackHandler = () => navigate("/");
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
                value={fullName}
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
                value={address}
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
                  value={Phone}
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
                  value={email}
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
                  value={LinkedIn}
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
                  value={Protfolio}
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

          <div className="BackgroundImg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstPage;
