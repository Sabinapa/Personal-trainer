import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserAlt } from "react-icons/fa";
import '../css/PersonalTrainers.css';

const PersonalTrainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get('/api/trainers');
                if (response.data && Array.isArray(response.data.data)) {
                    setTrainers(response.data.data);
                } else {
                    console.error("Expected an array of trainers, but received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching trainers:", error);
            }
        };

        fetchTrainers();
    }, []);

    return (
        <div className="trainers-list">
            <h2>Personal Trainers</h2>
            <div className="trainers-container">
                {Array.isArray(trainers) && trainers.length > 0 ? (
                    trainers.map((trainer) => (
                        <div className="trainer-card" key={trainer._id}>
                            <div className="trainer-icon">
                                {trainer.gender === 'female' ? <FaUserAlt className="female-icon" /> : <FaUserAlt className="male-icon" />}
                            </div>
                            <div className="trainer-info">
                                <h3>{trainer.name} {trainer.username}</h3>
                                <p>{trainer.description.length > 100 ? trainer.description.substring(0, 100) + '...' : trainer.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No trainers found.</p>
                )}
            </div>
        </div>
    );
};

export default PersonalTrainers;
