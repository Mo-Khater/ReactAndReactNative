import React, { useState } from "react";
import Service1 from "./service1";
function Service({increaseindex,next,num}) {
const [indexservice,setindexservice]=useState(0);
  const [data1, setdate] = useState( Array.from({ length: num }, () => ({
    Title: '',
    description: '',
    link: '',
  })));
  const increaseindexservice=()=>{
    if(indexservice==num-1)
    increaseindex(data1);
else
    setindexservice(indexservice+1);
  }

  const decreaseindexservice=()=>{
    if(indexservice==0)
    next(false);
else
    setindexservice(indexservice-1);
  }

  const handleTitle=(e)=>{
    let newdata=[...data1];
    newdata[indexservice]={...newdata[indexservice],Title:e.target.value};
    setdate(newdata);
  }
  const handledescription=(e)=>{
    let newdata=[...data1];
    newdata[indexservice]={...newdata[indexservice],description:e.target.value};
    setdate(newdata);
  }
  const handlelink=(e)=>{
    let newdata=[...data1];
    newdata[indexservice]={...newdata[indexservice],link:e.target.value};
    setdate(newdata);
  }
  return( <Service1 handleTitle={handleTitle} handledescription={handledescription} handlelink={handlelink} Title={data1[indexservice].Title} description={data1[indexservice].description} link={data1[indexservice].link} increaseindexservice={increaseindexservice} decreaseindexservice={decreaseindexservice} indexservice={indexservice}/>)
 
}

export default Service
