import React from "react";
import "./CSS/Navbar.scss";
import ResumeStepper from "../../Imported/stepper";
const Navbar =({props})=>{


    return(
        <div className="NavWrap">
           <ResumeStepper props={props}/>
        </div>
    );

    
};

export default Navbar;