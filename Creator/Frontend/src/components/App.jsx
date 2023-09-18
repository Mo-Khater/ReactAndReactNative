import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./PageStructure/Home";
import FirstStep from "./LetterPages/FirstStep/FirstStep";
import SecondStep from "./LetterPages/SecondStep/SecondStep";
import FinalStep from "./LetterPages/FinalStep/FinalStep";
import CompleteLetter from "./LetterModels/CompleteLetter";
import CoverSelect from "./LetterModels/CoverSelect";
import Letter from "./LetterModels/Letter";
import FirstPage from "../pages/first.page/first-page";
import SecondPage from "../pages/second.page/second-page";
import ThirdPage from "../pages/third.page/third-page";
import FourthPage from "../pages/fourth.page/fourth-page";
import ResumePage from "../pages/resume.page/resume";
import Container from "../portofolio/portofolio";
import History from "../pages/history.page/history-page";
import About from "../about/about";
import Login from "../registration/login";
import Register from "../registration/register";

export const StateContext = createContext();

function App() {
  const [fullName, setName] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [LinkedIn, setLinked] = useState("");
  const [Protfolio, setPortfolio] = useState("");

  const [Degree, setDegree] = useState("");
  const [Institution, setInit] = useState("");
  const [Graduation, setDate] = useState("");
  const [Projects, setProjects] = useState([]);

  const [Hobbies, setHob] = useState([]);
  const [Programming, setProg] = useState([]);
  const [languages, setLang] = useState([]);

  const [Experince, setExperience] = useState([]);

  const [country, setCountry] = useState("");
  const [targetJobTitle, setTargetJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [sendTo, setSendTo] = useState("");

  const [industry, setIndustry] = useState("");
  const [years, setYears] = useState("");
  const [skills, setSkills] = useState(["", ""]);
  const [qualities, setQualities] = useState(["", ""]);

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/CompleteLetter" element={<CompleteLetter />} />
          </Routes>
          <StateContext.Provider
            value={{
              fullName,
              setName,
              address,
              setAddress,
              Phone,
              setPhone,
              email,
              setEmail,
              LinkedIn,
              setLinked,
              Protfolio,
              setPortfolio,
              Degree,
              setDegree,
              Institution,
              setInit,
              Graduation,
              setDate,
              Projects,
              setProjects,
              Hobbies,
              setHob,
              Programming,
              setProg,
              languages,
              setLang,
              Experince,
              setExperience,
              country,
              setCountry,
              targetJobTitle,
              setTargetJobTitle,
              company,
              setCompany,
              city,
              setCity,
              sendTo,
              setSendTo,
              industry,
              setIndustry,
              years,
              setYears,
              skills,
              setSkills,
              qualities,
              setQualities,
            }}
          >
            <Routes>
              <Route path="/Contact" element={<FirstPage />} />
              <Route path="/Education" element={<SecondPage />}></Route>
              <Route path="/Skills" element={<ThirdPage />}></Route>
              <Route path="/Experience" element={<FourthPage />}></Route>
              <Route path="/Resume" element={<ResumePage />}></Route>
              <Route path="/Letter" element={<Letter />} />
              <Route path="/CoverSelect" element={<CoverSelect />} />
              <Route path="/FirstStep" element={<FirstStep />} />
              <Route path="/SecondStep" element={<SecondStep />}></Route>
              <Route path="/FinalStep" element={<FinalStep />}></Route>
            </Routes>
            <Routes>
              <Route path="/portofolio" element={<Container />} />
              <Route path="/about" element={<About />} />
              <Route path="/me" element={<History />} />
            </Routes>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </StateContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
