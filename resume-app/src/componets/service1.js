import { useState ,useEffect} from "react";
import {GiConfirmed} from "react-icons/gi"
import {AiOutlineLink} from "react-icons/ai"
import {MdTitle,MdDescription} from "react-icons/md"
const Service1=({increaseindexservice,decreaseindexservice,indexservice,handleTitle,handledescription,handlelink,Title,description,link})=>{
    const [messenge, setmessenge] = useState('');
    const Validateform=()=>{
        if ( Title === ''||description===''||link==='') {
            return 'Please fill out all the fields (icon is optional)';
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
                <input value={Title} onChange={handleTitle} placeholder="Title for your service"></input>
          <MdTitle className="icon"/>
                </div>
                <div className="box">
                <input value={description} onChange={handledescription} placeholder="some Description"></input>
          <MdDescription className="icon"/>
                </div>
                <div className="box">
                <input value={link} onChange={handlelink} placeholder="Link for your service"></input>
          <AiOutlineLink className="icon"/>
                </div>
                <p className="msg">{messenge}</p>
          <button type="submit" onClick={back}>Next</button>
          <button onClick={decreaseindexservice} className="prev">Prev</button>
        </form>
            </div>
        </div>
        
      );
}
export default Service1;