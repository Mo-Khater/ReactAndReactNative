import { useState } from "react";
import Typesofprojects from "./typesofprojects";
import './css/number.css';
import Types from '../imgs/types.png'
const Numberoftypes = ({ increaseindex, decreaseindex }) => {
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
            <label>What is the number of projects'types you want to provide?</label>
            <input type="number" value={num} onChange={editNum} className="inp"/>
            <p>note:</p>
            <p>types will appear like in this photo:</p>
            <img src={Types} className="pic"/>
            <button onClick={()=>next(true)}>Next</button>
            <button onClick={decreaseindex} className="pp">Prev</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <Typesofprojects increaseindex={increaseindex} next={next} num={num} />
    );
  }
};

export default Numberoftypes;