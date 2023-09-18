import Info from "../componets/info"
import Links from "../componets/links";
import Projects from "../componets/projectsandexperince";
import React, { useState } from "react";
import Number1 from "../componets/numberofprojects";
import Submit from "../componets/submit";
import Number from "../componets/numberofservices";
import Numberoftypes from "../componets/numberoftypes";
function Container() {
const [index,setindex]=useState(1);
  const [data,setdate]=useState([]);
  const increaseindex = (object1) => {
    setindex(index + 1);
    let newdata = [...data, object1];
    setdate(newdata);
  };
  const decreaseindex=()=>{
    data.pop()
    setindex(index-1);
  }
    switch(index)
    {
      case 1: return<Info increaseindex={increaseindex}/>;
      case 2: return (<Links increaseindex={increaseindex} decreaseindex={decreaseindex}/>)
      case 3: return ( <Projects increaseindex={increaseindex} decreaseindex={decreaseindex}/>)
      case 4: return ( <Number increaseindex={increaseindex} decreaseindex={decreaseindex}/>)
      case 5: return ( <Numberoftypes increaseindex={increaseindex} decreaseindex={decreaseindex}/>)
      case 6: return (<Number1 increaseindex={increaseindex} decreaseindex={decreaseindex}/> )
      case 7:return <Submit data={data}/>
    }
}

export default Container
