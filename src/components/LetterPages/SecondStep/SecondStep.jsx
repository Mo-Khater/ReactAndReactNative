import React from "react";
import { useContext } from "react";
import "./CSS/second-page.scss";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../PageStructure/Header";
import Footer from "../../PageStructure/Footer";
import { StateContext } from "../../App";


const SecondStep = () => {
  const {targetJobTitle,setTargetJobTitle,company,setCompany,city,setCity,sendTo,setSendTo }= useContext(StateContext);


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    NextHandler();
  };

  const NextHandler = () => {
    navigate("/FinalStep")
  };
  console.log(location.state);

  const BackHandler = () => {
    navigate("/FirstStep");
  };

  return (
    <>
      <Header />
      <div id="secondPage">
        <Navbar props={1} />
        <div className="Background">
          <div className="mainWrapper">
            <p>Target Job</p>
            <form onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <label htmlFor="jobtitle">Target Job Title</label>
                <input
                  type="text"
                  id="jobtitle"
                  required
                  placeholder="e.g. Software Engineer."
                  value={targetJobTitle}
                  onChange={(e) => setTargetJobTitle(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  placeholder="e.g. Microsoft."
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="e.g. New York."
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="sendto">SendTo</label>
                <input
                  type="text"
                  id="sendto"
                  placeholder="e.g. Mr Jon."
                  required
                  value={sendTo}
                  onChange={(e) => setSendTo(e.target.value)}
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

export default SecondStep;