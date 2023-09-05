import data from "../data/data";
import { useState,useEffect  } from "react";
import {AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import './css/links.css'
const Links=({increaseindex,decreaseindex})=>{
    const [object1,setobject1]=useState({
        github:'',
        facebook:'',
        twitter:'',
        linkedin:'',
        cv:null
    });
    const [messenge, setmessenge] = useState('');
    const [github, setgithub] = useState('');
    const [facebook, setfacebook] = useState('');
    const [twitter, settwitter] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [cv, setcv] = useState(null);
    
    const editgithub=(e)=>{
        setgithub(e.target.value);
       const newobject={...object1,github:e.target.value}
        setobject1(newobject);
    }
    const editfacebook=(e)=>{
        setfacebook(e.target.value);
        const newobject={...object1,facebook:e.target.value}
        setobject1(newobject);
    }
    const edittwitter=(e)=>{
        settwitter(e.target.value);
        const newobject={...object1,twitter:e.target.value}
        setobject1(newobject);
    }
    const editlinkedin=(e)=>{
        setlinkedin(e.target.value);
        const newobject={...object1,linkedin:e.target.value}
        setobject1(newobject);
    }
    const editcv = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
    
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        setcv(dataUrl);
    
        const newobject = { ...object1, cv: dataUrl };
        setobject1(newobject);
      };
    
      reader.readAsDataURL(file);
    };

    const Validateform=()=>{
        if (github === '' || facebook === ''||twitter===''||linkedin===''||cv===null) {
            return 'Please fill out all the fields.';
            }
            return '';
    }
    const back=(e)=>{
        e.preventDefault();
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
          <input value={github} onChange={editgithub} placeholder={data[1].Element1}></input>
          <AiFillGithub className="iii"/>
          </div>
          <div className="box">
          <input value={facebook} onChange={editfacebook} placeholder={data[1].Element2}></input>
          <BsFacebook className="iii"/>
          </div>
          <div className="box">
          <input value={twitter} onChange={edittwitter} placeholder={data[1].Element3}></input>
          <AiFillTwitterCircle className="iii"/>
          </div>
          <div className="box">
          <input value={linkedin} onChange={editlinkedin} placeholder={data[1].Element4}></input>
          <AiFillLinkedin className="iii"/>
          </div>
          <div className="box ">
          <label>{data[1].Element5}:</label>
          <input type="file" onChange={editcv} id="cv" accept=".pdf"></input>
          </div>
          <p className="msg">{messenge}</p>
        </form>
          <button onClick={back}>Next</button>
          <button onClick={decreaseindex} className="pp">Prev</button>
            </div>
        </div>
       
      );
}
export default Links;