import { useState } from "react";
import Project from "./project";
import './css/number.css';

const Number1 = ({ increaseindex, decreaseindex }) => {
  const [num, setNum] = useState(1);
  const [showService, setShowService] = useState(false);

  const editNum = (e) => {
    setNum(e.target.value);
  };

  const next = (property) => {
    setShowService(property);
  };

  if (!showService) {
    return (
      <div className="form">
        <div className="container">
          <form>
            <label>What is the number of projects you provide?</label>
            <input type="number" value={num} onChange={editNum} className="inp"/>
            <button onClick={()=>next(true)}>Next</button>
            <button onClick={decreaseindex} className="pp">Prev</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <Project increaseindex={increaseindex} next={next} num={num} />
    );
  }
};

export default Number1;