import React from "react";
import { useContext } from "react";
import "./CSS/second-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";
import { StateContext } from "../../components/App";



const SecondPage = () => {
  const { Degree, setDegree, Institution, setInit, Graduation, setDate, Projects, setProjects, projectArr, setArr, proj, setipro } = useContext(StateContext);

  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Skills");
  };
  const BackHandler = () => {
    navigate("/Contact");
  };
  const AddProject = () => {
    setipro(proj + 1);
    setProjects(prev => [...prev, ''])
    setArr((prevprojects, index) => {
      return [
        ...prevprojects,

        <div className="Projects" id={proj}>
          <button onClick={del} name={proj}>X</button>
          <input
            type="text"
            id={proj}
            placeholder="e.g. Ecommerce website"
            onChange={(e) => {
              setProjects((prev) => {
                const value = e.target.value;
                let key = parseInt(e.target.id);
                if (key <= prev.length) { prev[key] = value; } else { prev = [...prev, value]; }
                return prev;
              });
            }}
          ></input>
        </div>,
      ];
    });
  };
  const del = (e) => {
    console.log(e.target.name);
    const x = document.getElementById(e.target.name);
    x.remove();
  }
  return (
    <>
      <Header />
      <div id="secondPage">
        <Navbar props={1} />
        <div className="Background">
          <div className="mainWrapper">
            <p>Education</p>
            <div className="inputWrapper ">
              <label for="fullName">Degree</label>
              <input
                type="text"
                id="fullName"
                value={Degree}
                required
                placeholder="e.g. Engineering"
                onChange={(e) => setDegree(e.target.value)}
              ></input>
            </div>
            <div className="inputWrapper">
              <label for="address">Institution</label>
              <input
                type="text"
                id="address"
                value={Institution}
                placeholder="e.g. Cairo University"
                required
                onChange={(e) => setInit(e.target.value)}
              ></input>
            </div>
            <div className="inputWrapper borderbottom">
              <label for="email">Graduation Year</label>
              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                id="email"
                value={Graduation}
                placeholder="e.g. 2023"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              ></input>
            </div>

            <div className="inputWrapper">
              <button onClick={AddProject} className="Probutton">
                Add project
              </button>
              <div className="projectWrapper">
                {projectArr.map((project) => {
                  return <div>{project}</div>;
                })}
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

export default SecondPage;
export const projects = (state) => state.collection.Project;
