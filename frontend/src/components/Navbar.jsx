import '../css/Navbar.css'

import { IoFitnessOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import logo from "../assets/logotip.png";

const Navbar = () => {
    return (
        <div className="header">
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/search-trainers" className="navbar-link">
                        Search Personal Trainer
                    </Link>
                    <FaUserCircle className="profile-icon"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;