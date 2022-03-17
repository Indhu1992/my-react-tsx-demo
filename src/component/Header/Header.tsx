import './Header.css'
import logo from "../../assets/images/Logo.png";
import { Link } from 'react-router-dom';
export const Header = () => {
    return (<div className='header'>
        <div className='logo'>
            <img className='logo-image' src={logo} alt="Viprant Logo"></img>
        </div>

        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="Home"style={{textDecoration:"none"}}>Home</Link>
                        {/* <Link to="Home">Home</Link> */}
                        
                    </li>
                    <li>
                        <Link to="About"style={{textDecoration:"none"}}>About</Link>
                    </li>
                    <li>
                        <Link to="Services"style={{textDecoration:"none"}}>Services</Link>
                    </li>
                    <li>
                        <Link to="Contact-us"style={{textDecoration:"none"}}>Contact-us</Link>
                    </li>

                </ul>
            </nav>
        </div>

    </div>

    )
}