import React from "react";
import "./CSS/Navbar.scss";
import Stepper from "../Imported/stepper";
const Navbar =({props})=>{


    return(
        <div className="NavWrap">
           <Stepper props={props}/>
        </div>
    );

    
};

export default Navbar;