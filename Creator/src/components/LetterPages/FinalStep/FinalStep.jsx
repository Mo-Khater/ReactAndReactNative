import { useContext } from "react";
import "./CSS/third-page.scss";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../PageStructure/Header";
import Footer from "../../PageStructure/Footer";
import { StateContext } from "../../App";


const FinalStep = () => {
  const {industry,setIndustry,years,setYears,skills,setSkills,qualities,setQualities} = useContext(StateContext);


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    NextHandler();
  };

  const NextHandler = () => {
    navigate("/Letter");
  };

  const BackHandler = () => {
    navigate("/SecondStep");
  };

  return (
    <>
      <Header />
      <div id="secondPage">
        <Navbar props={2} />
        <div className="Background">
          <div className="mainWrapper">
            <p>About</p>
            <form onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <label htmlFor="industry">Industry</label>
                <input
                  type="text"
                  id="industry"
                  placeholder="e.g. Digital Design"
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="text"
                  id="experience"
                  placeholder="e.g. Five"
                  required
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="skills">Two Skills (Most Related)</label>
                <input
                  type="text"
                  id="skills1"
                  placeholder="e.g. Skill 1"
                  required
                  value={skills[0]}
                  onChange={(e) =>
                    setSkills([e.target.value, skills[1]])
                  }
                  style={{
                    width: "40%",
                    display: "inline-block",
                    marginRight: "20px",
                  }}
                ></input>
                <input
                  type="text"
                  id="skills2"
                  placeholder="e.g. Skill 2"
                  required
                  value={skills[1]}
                  onChange={(e) => setSkills([skills[0], e.target.value])}
                  style={{ width: "40%", display: "inline-block" }}
                ></input>
              </div>
              <div className="inputWrapper">
                <label htmlFor="qualities">Two Qualities (Most Related)</label>
                <input
                  type="text"
                  id="qualities1"
                  placeholder="e.g. Quality 1"
                  required
                  value={qualities[0]}
                  onChange={(e) =>
                    setQualities([e.target.value, qualities[1]])
                  }
                  style={{
                    width: "40%",
                    display: "inline-block",
                    marginRight: "20px",
                  }}
                ></input>
                <input
                  type="text"
                  id="qualities2"
                  placeholder="e.g. Quality 2"
                  required
                  value={qualities[1]}
                  onChange={(e) => setQualities([qualities[0], e.target.value])}
                  style={{ width: "40%", display: "inline-block" }}
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

export default FinalStep;