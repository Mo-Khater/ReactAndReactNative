import React from "react";
import { useContext } from "react";
import "./CSS/second-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";
import { StateContext } from "../../components/App";
import Project from "../../componets/project";

const SecondPage = () => {
  const {
    Degree,
    setDegree,
    Institution,
    setInit,
    Graduation,
    setDate,
    Projects,
    setProjects,
  } = useContext(StateContext);

  const navigate = useNavigate();
  const NextHandler = (e) => {
    e.preventDefault();
    navigate("/Skills");
  };
  const BackHandler = () => {
    navigate("/Contact");
  };

  const AddProject = () => {
    setProjects((prev) => [...prev, ""]);
  };

  const handleDeleteProject = (projectIndex) => {
    const newProjects = [...Projects];
    newProjects.splice(projectIndex, 1);

    setProjects(newProjects);
  };

  const handleProjectChange = (newProject, projectIndex) => {
    if (projectIndex >= Projects?.length) return;

    const newProjects = [...Projects];
    newProjects[projectIndex] = newProject;

    setProjects(newProjects);
  };

  return (
    <>
      <Header />
      <div id="secondPage">
        <Navbar props={1} />
        <form onSubmit={NextHandler}>
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
                <button
                  type="button"
                  onClick={AddProject}
                  className="Probutton"
                >
                  Add project
                </button>
                <div className="projectWrapper">
                  {Projects?.map((project, index) => (
                    <div className="Projects">
                      <button
                        type="button"
                        onClick={() => handleDeleteProject(index)}
                      >
                        X
                      </button>
                      <input
                        type="text"
                        value={project}
                        placeholder="e.g. Ecommerce website"
                        onChange={(e) => {
                          handleProjectChange(e?.target?.value, index);
                        }}
                      ></input>
                    </div>
                  ))}
                </div>
              </div>

              <div className="buttonsWrapper">
                <button type="button" className="Back" onClick={BackHandler}>
                  Back
                </button>
                <button className="Next" type="submit">
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

export default SecondPage;
export const projects = (state) => state.collection.Project;