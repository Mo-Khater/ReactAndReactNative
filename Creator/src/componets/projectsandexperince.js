import data from "../data/data";
import { useState ,useEffect} from "react";
import './css/projects.css'
import {AiOutlineLink} from 'react-icons/ai'
import {MdOutlineDescription} from 'react-icons/md'
const Projects=({increaseindex,decreaseindex})=>{
    const [object1,setobject1]=useState({
        projects:'',
        experience:'',
        des:''
    });
  const updateObject1 = (updatedData) => {
    setobject1(updatedData);
}
    const [messenge, setmessenge] = useState('');
       const Validateform=()=>{
        const { projects, experience, des} = object1;
        if (projects === '' || experience === ''||des==='') {
            return 'Please fill out all the fields.';
            }
            return '';
    }
    const back=()=>{
        const valid=Validateform();
        if(!valid)
        increaseindex(object1);
        else
        setmessenge(valid);
    }
    return (
        <div className="form">
            <div className="container">
            <form>
                <div className="box">
                <input value={object1.projects} onChange={(e) => updateObject1({ ...object1, projects: e.target.value })} placeholder={data[2].Element1}></input>
                <AiOutlineLink className="iii"/>
                </div>
                <div className="box">
                <input value={object1.experience} onChange={(e) => updateObject1({ ...object1, experience: e.target.value })} placeholder={data[2].Element2}></input>
                <AiOutlineLink className="iii"/>
                </div>
                <div className="box">
                <textarea value={object1.des} onChange={(e) => updateObject1({ ...object1, des: e.target.value })} placeholder="some description about your projects"></textarea>
                <MdOutlineDescription className="iii"/>
                </div>
                <p className="msg">{messenge}</p>
          <button onClick={back}>Next</button>
          <button onClick={decreaseindex} className="pp">Prev</button>
        </form>
            </div>
        </div>
        
      );
}
export default Projects;