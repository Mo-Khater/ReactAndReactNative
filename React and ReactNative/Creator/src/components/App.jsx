import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FirstStep from "./LetterPages/FirstStep/FirstStep";
import SecondStep from "./LetterPages/SecondStep/SecondStep";
import FinalStep from "./LetterPages/FinalStep/FinalStep";
import CompleteLetter from "./CompleteLetter";
import CoverSelect from "./CoverSelect";
import Letter from "./Letter";
import FirstPage from "../pages/first.page/first-page";
import SecondPage from "../pages/second.page/second-page";
import ThirdPage from "../pages/third.page/third-page";
import ResumePage from "../pages/resume.page/resume";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<FirstPage />} />
            <Route path="/Education" element={<SecondPage />}></Route>
            <Route path="/Skills" element={<ThirdPage />}></Route>
            <Route path="/Letter" element={<Letter />} />
            <Route path="/CoverSelect" element={<CoverSelect />} />
            <Route path="/FirstStep" element={<FirstStep />} />
            <Route path="/SecondStep" element={<SecondStep />}></Route>
            <Route path="/FinalStep" element={<FinalStep />}></Route>
            <Route path="/CompleteLetter" element={<CompleteLetter />} />
            <Route path='/Resume' element={<ResumePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;