import React from "react";
import { useState } from "react";
import "./CSS/third-page.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { Language } from "../resume.page/sub/summary";

const SecondPage = () => {
  const [Hobbies, setHob] = useState([]);
  const [HobArr, setHobArr] = useState([]);
  const [Hob, setiHob] = useState(0);

  const [Programming, setProg] = useState([]);
  const [ProgArr, setProgArr] = useState([]);
  const [prog, setiprog] = useState(0);

  const [languages, setLang] = useState([]);
  const [LangArr, setLangArr] = useState([]);
  const [lan, setiLan] = useState(0);

  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Resume", {
      state: {
        ...location.state,
        hobbies: Hobbies,
        skills: Programming,
        languages: languages,
      },
    });
  };
  const location = useLocation();
  const BackHandler = () => navigate("/Education");
  const AddLang = () => {
    setiLan(lan + 1);
    setLangArr((prevprojects, index) => {
      return [
        ...prevprojects,
        <div className="Projects">
          <input
            type="text"
            id={lan}
            placeholder="e.g. Arabic"
            onChange={(e) => {
              setLang((prev) => {
                const value = e.target.value;
                let key = parseInt(e.target.id);
                if (key <= prev.length) { prev[key] = value; } else { prev = [...prev, value]; }
                prev.filter(ele => ele === '');
                return prev;
              });
            }}
          ></input>
        </div>,
      ];
    });
  };

  const AddProg = () => {
    setiprog(prog + 1);
    setProgArr((prevprojects, index) => {
      return [
        ...prevprojects,

        <div className="Projects">
          <input
            type="text"
            id={prog}
            placeholder="e.g. Web development"
            onChange={(e) => {
              setProg((prev) => {
                const value = e.target.value;
                let key = parseInt(e.target.id);
                if (key <= prev.length) { prev[key] = value; } else { prev = [...prev, value]; }
                prev.filter(ele => ele === '');
                return prev;
              });
            }}
          ></input>
        </div>,
      ];
    });
  };

  const AddHobbie = () => {
      setiHob(Hob + 1);
      setHobArr((prevprojects, index) => {
        return [
          ...prevprojects,

          <div className="Projects">
            <input
              type="text"
              id={Hob}
              placeholder="e.g. Fishing"
              onChange={(e) => {
                setHob((prev) => {
                  const value = e.target.value;
                  let key = parseInt(e.target.id);
                  if (key <= prev.length) { prev[key] = value; } else { prev = [...prev, value]; }
                  prev.filter(ele => ele === '');
                  return prev;
                });
              }}
            ></input>
          </div>,
        ];
      });
  };
  const debug =()=>{
    console.log(Programming);
    console.log(Hobbies);
    console.log(languages)
  }
  return (
    <div id="thirdPage">
      <Navbar props={2} />
      <div className="Background">
        <div className="mainWrapper">
          <p>Skills</p>
          <div className="inputWrapper">
            <button onClick={AddProg} className="Probutton">
              Add Programming Skill
            </button>
            <div className="projectWrapper">
              {ProgArr.map((project) => {
                return <div>{project}</div>;
              })}
            </div>
          </div>

          <div className="inputWrapper">
            <button onClick={AddLang} className="Probutton">
              Add Langauge
            </button>
            <div className="projectWrapper">
              {LangArr.map((project) => {
                return <div>{project}</div>;
              })}
            </div>
          </div>

          <div className="inputWrapper">
            <button onClick={AddHobbie} className="Probutton">
              Add Hobbie
            </button>
            <div className="projectWrapper">
              {HobArr.map((project) => {
                return <div>{project}</div>;
              })}
            </div>
          </div>

          <div className="buttonsWrapper">
            <button className="Back" onClick={BackHandler}>
              Back
            </button>
            <button className="Next" type="submit" onClick={NextHandler}>
              Next
            </button>
            <button onClick={debug}>Kapran</button>
          </div>
        </div>
        <div className="BackgroundImg"></div>
      </div>
    </div>
  );
};

export default SecondPage;
