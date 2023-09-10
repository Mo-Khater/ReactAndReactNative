import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const token = localStorage.getItem('token');
    const Navigate = useNavigate();
    const signout=()=>{
        localStorage.removeItem('token');
    }
    return (
        <header id= "header" className="header">
            <div>
                <h1 className="title">CREATOR</h1>
            </div>
            <div className="nav">
                <ul>
                    <li><Link className="a" to='/'>HOME</Link></li>
                    <li><Link className="a" to='/about'>ABOUT</Link></li>
                    <li><Link className='a' to='/me'>ME</Link></li>
                    <li><Link className='a' to='/register'>register</Link></li>
                    {!token?<li><Link className='a' to='/login'>login</Link></li>:<li className="hide"></li>}
                    {token?<li><Link onClick={signout} className="a" to='/login'>signout</Link></li>:<li className="hide"></li>}
                    
                </ul>
                
            </div>
    </header>
    );
}
export default Header