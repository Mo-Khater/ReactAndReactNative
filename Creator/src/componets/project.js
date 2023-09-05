import React, { useState } from "react";
import Project1 from "./project1";
function Project({increaseindex,next,num}) {
const [indexservice,setindexservice]=useState(0);
const [data2, setdate] = useState( Array.from({ length: num }, () => ({
  Name1:'',
  Description1:'',
  link1:'',
  type:'',
  Photo:null,
})));
  const increaseindexservice=()=>{
    if(indexservice==num-1)
    increaseindex(data2);
else
    setindexservice(indexservice+1);
  }

  const decreaseindexservice=()=>{
    if(indexservice==0)
    next(false);
else
    setindexservice(indexservice-1);
  }
  const handleName1=(e)=>{
    let newdata=[...data2];
    newdata[indexservice]={...newdata[indexservice],Name1:e.target.value};
    setdate(newdata);
  }
  const handletype=(e)=>{
    let newdata=[...data2];
    newdata[indexservice]={...newdata[indexservice],type:e.target.value};
    setdate(newdata);
  }
  const handleDescription1=(e)=>{
    let newdata=[...data2];
    newdata[indexservice]={...newdata[indexservice],Description1:e.target.value};
    setdate(newdata);
  }
  const handlelink1=(e)=>{
    let newdata=[...data2];
    newdata[indexservice]={...newdata[indexservice],link1:e.target.value};
    setdate(newdata);
  }
  const handlephoto=(e)=>{
    const file = e.target.files[0];
      const reader = new FileReader();
    
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        let newdata=[...data2];
        newdata[indexservice]={...newdata[indexservice],photo:dataUrl};
        setdate(newdata);
      };
    
      reader.readAsDataURL(file);
  }
  return( <Project1 handleName1={handleName1} handleDescription1={handleDescription1} handlelink1={handlelink1} Name1={data2[indexservice].Name1} Description1={data2[indexservice].Description1} link1={data2[indexservice].link1} increaseindexservice={increaseindexservice} decreaseindexservice={decreaseindexservice} indexservice={indexservice} handlephoto={handlephoto} type={data2[indexservice].type} handletype={handletype}/>)
}

export default Project
