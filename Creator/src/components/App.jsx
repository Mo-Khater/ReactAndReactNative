import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverLetter from "./CoverLetter";
import Home from "./Home"
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
            <Route path="/coverletter" element={<CoverLetter />} />
            <Route path="/Contact" element={<FirstPage />} />
            <Route path="/Education" element={<SecondPage />}></Route>
            <Route path="/Skills" element={<ThirdPage />}></Route>
            <Route path='/Resume' element={<ResumePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;