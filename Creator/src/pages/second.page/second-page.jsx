import React from "react";
import { useState } from "react";
import "./CSS/second-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const SecondPage = () => {
  const [Degree, setDegree] = useState("");
  const [Institution, setInit] = useState("");
  const [Graduation, setDate] = useState("");

  const [Projects, setProjects] = useState([]);
  const [projectArr, setArr] = useState([]);
  const [proj, setipro] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const NextHandler = () => {
    navigate("/Skills", {
      state: {
        ...location.state,
        degree: Degree,
        institution: Institution,
        graduate: Graduation,
        projectsArr: Projects,
      },
    });
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

        <div className="Projects">
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
