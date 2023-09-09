import { Link } from "react-router-dom";
const Header = () => {
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
                </ul>
            </div>
    </header>
    );
}
export default Header