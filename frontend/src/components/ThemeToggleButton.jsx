import '../css/Navbar.css'

import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from "react-icons/lu";

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        try {
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        } catch (error) {
            console.error("Error toggling theme:", error);
        }
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'light' ? <FaMoon /> : <LuSun />}
        </button>
    );
};

export default ThemeToggleButton;
