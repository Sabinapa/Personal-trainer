
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PersonalTrainers.css';
import {Link} from "react-router-dom";

const PersonalTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const getRandomImage = (gender) => {
        const maleImages = [
            'public/trainers/male1.jpg',
            'public/trainers/male2.jpg',
            'public/trainers/male3.jpg',
        ];
        const femaleImages = [
            'public/trainers/female1.jpg',
            'public/trainers/female2.jpg',
            'public/trainers/female3.jpg',
        ];

        if (gender === 'male') {
            return maleImages[Math.floor(Math.random() * maleImages.length)];
        } else if (gender === 'female') {
            return femaleImages[Math.floor(Math.random() * femaleImages.length)];
        }
    };


    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get('/api/trainers');
                if (response.data && Array.isArray(response.data.data)) {
                    const trainersWithImages = response.data.data.map((trainer) => ({
                        ...trainer,
                        image: getRandomImage(trainer.gender),
                    }));
                    setTrainers(trainersWithImages);
                } else {
                    console.error("Expected an array of trainers, but received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching trainers:", error);
            }
        };

        fetchTrainers();
    }, []);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <div className="trainers-list">
            <h1>Personal Trainers</h1>
            <div className="trainers-container">
                {Array.isArray(trainers) && trainers.length > 0 ? (
                    trainers.map((trainer) => (
                        <div className="trainer-card" key={trainer._id}>
                            <div className="trainer-icon">
                                <img
                                    src={trainer.image}
                                    alt={`${trainer.name} ${trainer.lastname}`}
                                    className="trainer-image"
                                />
                            </div>
                            <div className="trainer-info">
                                <h3>{trainer.name} {trainer.lastname}</h3>
                                <p>
                                    {isMobile
                                        ? (trainer.description.length > 200
                                            ? trainer.description.substring(0, 200) + '...'
                                            : trainer.description)
                                        : (trainer.description.length > 300
                                            ? trainer.description.substring(0, 300) + '...'
                                            : trainer.description)
                                    }
                                </p>
                                <Link to={`/trainer/${trainer._id}`}>
                                    <button>Read more about {trainer.name}</button>
                                </Link>
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