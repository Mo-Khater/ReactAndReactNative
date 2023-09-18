import React from "react";
import { useContext, useRef } from "react";
import "./CSS/third-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/PageStructure/Header";
import Footer from "../../components/PageStructure/Footer";
import { StateContext } from "../../components/App";
import { Language } from "../resume.page/sub/summary";

const ThirdPage = () => {
  const {
    Programming,
    Hobbies,
    languages,
    setHob,
    setProg,
    setLang,
  } = useContext(StateContext);

  const navigate = useNavigate();
  const NextHandler = (e) => {
    e.preventDefault();
    navigate("/Experience");
  };
  const BackHandler = () => navigate("/Education");

  const AddLang = () => {
    setLang((prev) => [...prev, ""]);
  };
  const handleDeleteLang = (languageIndex) => {
    const newLanguages = [...languages];
    newLanguages.splice(languageIndex, 1);

    setLang(newLanguages);
  };
  const handleLangChange = (language, languageIndex) => {
    if (languageIndex >= languages?.length) return;

    const newLanguages = [...languages];
    newLanguages[languageIndex] = language;
    
    setLang(newLanguages);
  };



  const AddSkill = () => {
    setProg((prev) => [...prev, ""]);
  };
  const handleDeleteSkill = (skillIndex) => {
    const newProgramming = [...Programming];
    newProgramming.splice(skillIndex, 1);

    setProg(newProgramming);
  };
  const handleSkillChange = (Skill, SkillIndex) => {
    if (SkillIndex >= Programming?.length) return;

    const newProgramming = [...Programming];
    newProgramming[SkillIndex] = Skill;
    
    setProg(newProgramming);
  };



  const AddHobbie = () => {
    setHob((prev) => [...prev, ""]);
  };
  const handleDeleteHobbie = (HobbieIndex) => {
    const newHobbies= [...Hobbies];
    newHobbies.splice(HobbieIndex, 1);

    setHob(newHobbies);
  };
  const handleHobbieChange = (Hobbie, HobbieIndex) => {
    if (HobbieIndex >= Hobbies?.length) return;

    const newHobbies = [...Hobbies];
    newHobbies[HobbieIndex] = Hobbie;
    
    setHob(newHobbies);
  };

  

  function debug() {
    console.log(Programming);
    console.log(Hobbies);
    console.log(languages);
  }
  return (
    <>
      <Header />
      <div id="thirdPage">
        <Navbar props={2} />
        <form onSubmit={NextHandler}>
          <div className="Background">
            <div className="mainWrapper">
              <p>Skills</p>
              <div className="inputWrapper">
                <button type="button" onClick={AddSkill} className="Probutton">
                  Add Programming Skill
                </button>
                <div className="projectWrapper">
                {Programming?.map((Skill, index) => (
                    <div className="Projects">
                      <button
                        type="button"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        X
                      </button>
                      <input
                        type="text"
                        value={Skill}
                        placeholder="e.g. Arabic"
                        onChange={(e) => {
                          handleSkillChange(e?.target?.value, index);
                        }}
                      ></input>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inputWrapper">
                <button type="button" onClick={AddLang} className="Probutton">
                  Add Langauge
                </button>
                <div className="projectWrapper">
                  {languages?.map((language, index) => (
                    <div className="Projects">
                      <button
                        type="button"
                        onClick={() => handleDeleteLang(index)}
                      >
                        X
                      </button>
                      <input
                        type="text"
                        value={language}
                        placeholder="e.g. Arabic"
                        onChange={(e) => {
                          handleLangChange(e?.target?.value, index);
                        }}
                      ></input>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inputWrapper">
                <button type="button" onClick={AddHobbie} className="Probutton">
                  Add Hobbie
                </button>
                <div className="projectWrapper">
                {Hobbies?.map((hobbie, index) => (
                    <div className="Projects">
                      <button
                        type="button"
                        onClick={() => handleDeleteHobbie(index)}
                      >
                        X
                      </button>
                      <input
                        type="text"
                        value={hobbie}
                        placeholder="e.g. Arabic"
                        onChange={(e) => {
                          handleHobbieChange(e?.target?.value, index);
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

export default ThirdPage;
