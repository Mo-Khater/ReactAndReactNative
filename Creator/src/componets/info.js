import data from "../data/data";
import './css/info.css'
import { useContext ,useState,useEffect} from "react";
import {AiOutlineUser ,AiOutlineMail} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import {MdTitle} from "react-icons/md"
const Info=({increaseindex})=>{
    const [object1,setobject1]=useState({
        nickname:'',
        fullname:'',
        title:'',
        email:'',
        photo:null
    });
    const [nickname, setnickname] = useState('');
    const [messenge, setmessenge] = useState('');
    const [fullname, setfullname] = useState('');
    const [title, settitle] = useState('');
    const [email, setemail] = useState('');
    const [photo, setphoto] = useState(null);
    const editnickname=(e)=>{
        setnickname(e.target.value);
       const newobject={...object1,nickname:e.target.value}
        setobject1(newobject);
    }
    const editphoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          setphoto(dataUrl);
      
          const newobject = { ...object1, photo: dataUrl };
          setobject1(newobject);
        };
      
        reader.readAsDataURL(file);
      };
    const editfullname=(e)=>{
        setfullname(e.target.value);
        const newobject={...object1,fullname:e.target.value}
        setobject1(newobject);
    }
    const edittitle=(e)=>{
        settitle(e.target.value);
        const newobject={...object1,title:e.target.value}
        setobject1(newobject);
    }
    const editemail=(e)=>{
        setemail(e.target.value);
        const newobject={...object1,email:e.target.value}
        setobject1(newobject);
    }
    const Validateform=()=>{
        if (nickname === '' || fullname === ''||email===''||title===''||photo===null) {
            return 'Please fill out all the fields.';
            }
        
            // Validate the email format using a regular expression
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
            return 'Invalid email format.';
        }
            return '';
    }
    const back=(e)=>{
        const valid=Validateform();
        if(!valid)
        increaseindex(object1);
        else
        setmessenge(valid);
    }
    const navigate = useNavigate();
    const BackHandler = () => navigate("/");
    return (
        <div className="form">
        <div className="container">
        <form> 
         <div className="box">
         <input value={nickname}  onChange={editnickname} placeholder={data[0].Element1}   required></input>
          <AiOutlineUser className="iii"/>
         </div>
          <div className="box">
          <input value={fullname} onChange={editfullname} placeholder={data[0].Element2}></input>
          <AiOutlineUser className="iii"/>
          </div>
          <div className="box">
          <input value={title} onChange={edittitle} placeholder={data[0].Element3} ></input>
          <MdTitle className="iii"/>
          </div>
        <div className="box">
        <input value={email} onChange={editemail} placeholder="Your email" ></input>
          <AiOutlineMail className="iii"/>
        </div>
        <div className="box ">
          <label>Upload Your photo:</label>
          <input type="file" accept="image/*" onChange={editphoto} id="photo"></input>
          </div>
        <p className="msg">{messenge}</p>
          <button onClick={back}>Next</button>
          <button onClick={BackHandler} className="pp">Prev</button>
          </form>
          </div>
     
        </div>
      );
}
export default Info;