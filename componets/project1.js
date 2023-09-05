import { useState ,useEffect} from "react";
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import {AiOutlineLink} from "react-icons/ai"
import {MdTitle,MdDescription} from "react-icons/md"
const Project1=({increaseindexservice,decreaseindexservice,handleName1,handleDescription1,handlelink1,Name1,Description1,link1,handlephoto,type,handletype})=>{
    const [messenge, setmessenge] = useState('');
    const Validateform=()=>{
        if (Name1 === '' || Description1 === ''||link1===''||type==='') {
            return 'Please fill out all the fields.';
            }
            return '';
    }
    const back=(e)=>{
        e.preventDefault();
        const valid=Validateform();
        if(!valid)
        increaseindexservice();
        else
        setmessenge(valid);
    }
    return (
        <div className="form">
            <div className="container">
            <form>
                <div className="box">
                <input value={Name1} onChange={handleName1} placeholder="Name of the Project"></input>
          <MdOutlineDriveFileRenameOutline className="iii"/>
                </div>
                <div className="box">
                <input value={Description1} onChange={handleDescription1} placeholder="some Description"></input>
          <MdDescription className="iii"/>
                </div>
                <div className="box">
                <input value={link1} onChange={handlelink1} placeholder="Link for you project"></input>
          <AiOutlineLink className="iii"/>
                </div>
                <div className="box">
                <input value={type} onChange={handletype} placeholder="what is the type of your project"></input>
          <AiOutlineLink className="iii"/>
                </div>
                <div className="box">
                <input type="file" onChange={handlephoto} placeholder="photo for you project"></input>
                </div>
                <p className="msg">{messenge}</p>
          <button onClick={back}>Next</button>
          <button onClick={decreaseindexservice} className="pp">prev</button>
        </form>
            </div>

        </div>
       
      );
}
export default Project1;