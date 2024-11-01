import '../css/Navbar.css'
import React, {useContext, useEffect, useState} from 'react';
import {FaUserCircle, FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom";
import logo from "../assets/logotip.png";
import ThemeToggleButton from './ThemeToggleButton';
import {AuthContext} from "../context/AutoContext.jsx";

const Navbar = () => {
    const {isAuthenticated, trainerID, logout} = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="navbar-logo"/>
                    </Link>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
                </div>
                <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
                    <Link to="/trainer-search" className="navbar-link" onClick={toggleMenu}>
                        Search Personal Trainer
                    </Link>
                    {isAuthenticated ? (
                        <>
                            <Link to={`/trainer/${trainerID}`} className="navbar-link" onClick={toggleMenu}>
                                <FaUserCircle className="profile-icon"/>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-link" onClick={toggleMenu}>
                                Login
                            </Link>
                            <Link to="/register" className="navbar-link" onClick={toggleMenu}>
                                Register
                            </Link>
                        </>
                    )}
                    <ThemeToggleButton/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;