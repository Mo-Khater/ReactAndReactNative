import React, { useState } from 'react';
import './css/types.css'
function TypesOfProjects({ num, increaseindex, next }) {
  // Initialize an empty object to store input data
  const [inputData, setInputData] = useState({all:"all"});
  const [messenge, setmessenge] = useState('');
  // Function to handle changes in input fields and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create an array of input fields based on the input data state
  const inputFields = [];
  for (let i = 0; i < num-1; i++) {
    const inputName = `type${i}`;
    inputFields.push(
      <input
      className='inp'
        key={inputName}
        name={inputName}
        placeholder={`Type ${i}`}
        value={inputData[inputName] || ''}
        onChange={handleInputChange
        }
      />
    );
  }
  const Validateform=()=>{
          return '';
  }
  const back=(e)=>{
      e.preventDefault();
      const valid=Validateform();
      if(!valid)
      increaseindex(inputData);
      else
      setmessenge(valid);
  }
  return <div className='form'>
<div className='container'>
    <input key={"all"} name='all' value={"all"} disabled placeholder='all' className='ss inp'></input>
{inputFields}
<p className="msg">{messenge}</p>
<button onClick={back}>Next</button>
          <button onClick={()=>next(false)} className="pp">prev</button>
</div>
  </div>
}

export default TypesOfProjects;
