import React from "react";
import { useContext } from "react";
import "./CSS/fourth-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";
import { StateContext } from "../../components/App";

const FourthPage = () => {
  const { Experince, setExperience } = useContext(StateContext);
  const navigate = useNavigate();
  const NextHandler = (e) => {
    e.preventDefault();
    navigate("/Resume");
  };
  const BackHandler = () => navigate("/Skills");

  const AddExperince = () => {
    setExperience((prev) => [
      ...prev,
      { JobTitle: "", JobDesc: "", From: "", To: "" },
    ]);
  };
  const handleDeleteExp = (expIndex) => {
    const newExperinces = [...Experince];
    newExperinces.splice(expIndex, 1);

    setExperience(newExperinces);
  };
  const handleFromChange = (newFrom, expIndex) => {
    if (expIndex >= Experince?.length) return;

    const newExperinces = [...Experince];
    newExperinces[expIndex].From =newFrom ;
    
    setExperience(newExperinces);
  };
  const handleToChange = (newTo, expIndex) => {
    if (expIndex >= Experince?.length) return;

    const newExperinces = [...Experince];
    newExperinces[expIndex].To =newTo ;
    
    setExperience(newExperinces);
  };
  const handleTitleChange = (newTitle, expIndex) => {
    if (expIndex >= Experince?.length) return;

    const newExperinces = [...Experince];
    newExperinces[expIndex].JobTitle =newTitle ;
    
    setExperience(newExperinces);
  };
  const handleDescChange = (newDesc, expIndex) => {
    if (expIndex >= Experince?.length) return;

    const newExperinces = [...Experince];
    newExperinces[expIndex].JobDesc =newDesc ;
    
    setExperience(newExperinces);
  };


  function debug() {
    console.log(Experince);
  }
  return (
    <>
      <Header />
      <div id="fourthPage">
        <Navbar props={3} />
        <form onSubmit={NextHandler}>
          <div className="Background">
            <div className="mainWrapper">
              <p>Experience</p>
              <div className="Wrapper">
                <div className="inputWrapper">
                  <button
                    type="button"
                    onClick={AddExperince}
                    className="Probutton"
                  >
                    Add Job Experience
                  </button>
                  <div className="projectWrapper">
                    {Experince.map((exp,index) => (
                      <div className="Projects">
                        <button type="button" onClick={()=>handleDeleteExp(index)}>
                          X
                        </button>
                        <div className="JobTitle">
                          <p>Job Title</p>
                          <input
                            type="text"
                            placeholder="e.g. Junior Software Eng."
                            value={exp.JobTitle}
                            onChange={(e) => {
                             handleTitleChange(e?.target?.value,index)
                            }}
                          ></input>
                        </div>
                        <div className="JobDesc">
                          <p>Job Description</p>
                          <textarea
                            type="text"
                            placeholder="e.g. I design softwares for companies"
                            value={exp.JobDesc}
                            onChange={(e) => {
                              handleDescChange(e?.target?.value,index)
                            }}
                          ></textarea>
                        </div>
                        <div className="From">
                          <p>From</p>
                          <input
                            type="text"
                            placeholder="e.g. 2020"
                            value={exp.From}
                            onChange={(e) => {
                              handleFromChange(e?.target?.value,index)
                            }}
                          ></input>
                        </div>
                        <div className="To">
                          <p>To</p>
                          <input
                            type="text"
                            placeholder="e.g. 2023"
                            value={exp.To}
                            onChange={(e) => {
                              handleToChange(e?.target?.value,index)
                            }}
                          ></input>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="buttonsWrapper">
                <button type="button" className="Back" onClick={BackHandler}>
                  Back
                </button>
                <button className="Next" type="submit" onClick={NextHandler}>
                  Next
                </button>
              </div>
            </div>
            <div className="BackgroundImg"></div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FourthPage;
