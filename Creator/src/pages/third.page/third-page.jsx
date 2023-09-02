import React from "react";
import { useState } from "react";
import "./CSS/third-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const ThirdPage = () => {
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
    navigate("/Experience", {
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
    setLang(prev => [...prev, ''])
    setLangArr((prevprojects, index) => {
      return [
        ...prevprojects,
        <div className="Projects" id={lan+"lan"}>
          <button onClick={del} name={lan+"lan"}>X</button>
          <input
            type="text"
            id={lan}
            placeholder="e.g. Arabic"
            onChange={(e) => {
              setLang((prev) => {
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

  const AddProg = () => {
    setiprog(prog + 1);
    setProg(prev => [...prev, ''])
    setProgArr((prevprojects, index) => {
      return [
        ...prevprojects,

        <div className="Projects" id={prog+"prog"}>
           <button onClick={del} name={prog+"prog"}>X</button>
          <input
            type="text"
            id={prog}
            placeholder="e.g. Web development"
            onChange={(e) => {
              setProg((prev) => {
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

  const AddHobbie = () => {
    setiHob(Hob + 1);
    setHob(prev => [...prev, ''])
    setHobArr((prevprojects, index) => {
      return [
        ...prevprojects,

        <div className="Projects" id={Hob+"HOB"}>
          <button onClick={del} name={Hob+"HOB"}>X</button>
          <input
            type="text"
            id={Hob}
            placeholder="e.g. Fishing"
            onChange={(e) => {
              setHob((prev) => {
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
  const del =(e)=>{
    console.log(e.target.name);
    const x=document.getElementById(e.target.name);
    x.remove();
  }
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
      <Footer />
    </>
  );
};

export default ThirdPage;
