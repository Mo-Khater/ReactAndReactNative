import React, { useState } from "react";
import Portofolio from "../thewebsite/portofoli";
import './css/submit.css'
function Submit({ data }) {
  const press=()=>{
    setrender(true)
  }
  const [render, setrender] = useState(false);
  if (render) return <Portofolio data={data} />;
  else
    return (
      <div className="form">
        <div className="container">
          <button onClick={press}>
            Click here to render your website
          </button>
        </div>
      </div>
    );
}

export default Submit;
