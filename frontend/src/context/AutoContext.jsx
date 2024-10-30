import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [trainerID, setTrainerID] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const trainerData = JSON.parse(localStorage.getItem('trainer'));
        setIsAuthenticated(!!token);
        if (trainerData) {
            setTrainerID(trainerData.id);
        }
    }, []);

    const login = (token, trainer) => {
        localStorage.setItem('token', token);
        localStorage.setItem('trainer', JSON.stringify(trainer)); // Shrani podatke o trenerju v localStorage
        setIsAuthenticated(true);
        setTrainerID(trainer.id);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('trainer');
        setIsAuthenticated(false);
        setTrainerID(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, trainerID ,login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};