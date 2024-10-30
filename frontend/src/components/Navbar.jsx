import '../css/Navbar.css'
import React, {useContext, useEffect, useState} from 'react';
import { FaUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import logo from "../assets/logotip.png";
import ThemeToggleButton from './ThemeToggleButton';
import {AuthContext} from "../context/AutoContext.jsx";

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

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
                    {isAuthenticated ? (
                        <>
                            <FaUserCircle className="profile-icon"/>
                            <button onClick={logout} className="logout-button">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-link">
                                Login
                            </Link>
                            <Link to="/register" className="navbar-link">
                                Register
                            </Link>
                        </>
                    )}
                    <ThemeToggleButton/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;