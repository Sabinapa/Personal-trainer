import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import '../css/Trainer.css';
import {AuthContext} from "../context/AutoContext.jsx";

const Trainer = () => {
    const { isAuthenticated,trainerID, logout } = useContext(AuthContext);
    const {trainerId} = useParams();
    const [trainer, setTrainer] = useState(null);
    const navigate = useNavigate();
    console.log("Trainer ID:", trainerId);

    useEffect(() => {
        const fetchTrainer = async () => {
            try {
                const response = await axios.get(`/api/trainers/${trainerId}`);
                setTrainer(response.data.data);
            } catch (error) {
                console.error('Error fetching trainer:', error);
            }
        };

        fetchTrainer();
    }, [trainerId]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!trainer) return <p>Loading...</p>;

    return (
        <div className="trainer-profile">
            <h2>{trainer.name} {trainer.lastname}</h2>
            <p>{trainer.description}</p>
            <div className="trainer-data">
                <div className="trainer-profile-item">
                    <strong>Username:</strong> <span>{trainer.username}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Email:</strong> <span>{trainer.email}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>City:</strong> <span>{trainer.city}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Postcode:</strong> <span>{trainer.postcode}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Age:</strong> <span>{trainer.age}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Gender:</strong> <span>{trainer.gender}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Price Range:</strong> <span>{trainer.priceRange?.label || 'N/A'}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Workout Types:</strong>
                    <span>{trainer.typeWorkout?.map(workout => workout.name).join(', ') || 'N/A'}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Certifications:</strong>
                    <span>{trainer.certifications?.map(cert => cert.name).join(', ') || 'N/A'}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Languages:</strong>
                    <span>{trainer.language?.map(lang => lang.name).join(', ') || 'N/A'}</span>
                </div>
                <div className="trainer-profile-item">
                    <strong>Training Environment:</strong> <span>{trainer.environment}</span>
                </div>
            </div>
            <div className="profile-login">
                {isAuthenticated && trainerID === trainerId && (
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                )}
            </div>
        </div>
    );
};

export default Trainer;
