import "./summary.css";
import React from "react";

function Summary({ summaryInfo }) {
  return (
    <div id="summary">
      <h2>{summaryInfo.fullName}</h2>
      <div className="kapran">
        <h3>Experience: </h3>

        <ul style={{ listStyle: "dosc" }}>
          {summaryInfo.Experince?.map((ele) => {
            let check = false;
            for (let key in ele) {
              if (ele[key] !== "") {
                check = true;
                break;
              }
            }
            if (check) {
              return (
                <li>
                  <h5 style={{ display: "inline-block" }}>{ele.JobTitle} </h5>
                  <span>
                    {" "}
                    {ele.From}/{ele.To}
                  </span>
                  <br />
                  <h5>{ele.JobDesc}</h5>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="box">
        <h3>Projects: </h3>
        <ul className="list">
          {summaryInfo.Projects?.map((ele) => {
            if (ele !== "") {
              return (
                <li>
                  <h5 className="list-item">{ele}</h5>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

function Language({ langsInfo }) {
  return (
    <div>
      <h3>Languages:</h3>
      <ul className="list">
        {langsInfo?.map((val) => {
          if (val !== "") {
            return <li className="list-item">{val}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

function Hobbs({ hobbsInfo }) {
  return (
    <div>
      <h3>Hobbies:</h3>
      <ul className="list">
        {hobbsInfo?.map((val) => {
          if (val !== "") {
            return <li className="list-item">{val}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export { Summary, Language, Hobbs };
