import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  FirstPage  from './pages/first.page/first-page';
import SecondPage from './pages/second.page/second-page';
import ThirdPage from './pages/third.page/third-page';


import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
            <Routes>
              <Route path="/" element={<FirstPage/>}></Route>
              <Route path="/Education" element={<SecondPage/>}></Route>
              <Route path="/Skills" element={<ThirdPage/>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
