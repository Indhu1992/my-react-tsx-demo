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
                        <Link to="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="About">About</Link>
                    </li>
                    <li>
                        <Link to="Services">Services</Link>
                    </li>
                    <li>
                        <Link to="Contact-us">Contact-us</Link>
                    </li>

                </ul>
            </nav>
        </div>

    </div>

    )
}