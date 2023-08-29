import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CoverLetter from "./CoverLetter";
import Home from "./Home"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coverletter" element={<CoverLetter />} />
      </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;