import { useState } from "react";
import Service from "./service";
import './css/number.css';

const Number = ({ increaseindex, decreaseindex }) => {
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
            <label>What is the number of services you provide?</label>
            <input type="number" value={num} onChange={editNum} className="inp" />
            <button onClick={()=>next(true)}>Next</button>
            <button onClick={decreaseindex} className="prev">Prev</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <Service increaseindex={increaseindex} next={next} num={num} />
    );
  }
};

export default Number;