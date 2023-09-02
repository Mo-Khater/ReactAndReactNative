import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header id= "header" className="header">
            <div>
                <h1 className="title"><span>CREATOR</span></h1>
            </div>
            <div className="nav">
                <ul>
                    <li><Link className="a" to='/'>HOME</Link></li>
                    <li><Link className="a" to='/about'>ABOUT</Link></li>
                </ul>
            </div>
    </header>
    );
}
export default Header