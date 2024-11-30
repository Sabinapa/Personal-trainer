import React from 'react';
import {Link} from "react-router-dom";
import '../css/TrainerResult.css'

const TrainerResults = ({trainers}) => {

    const getRandomImage = (gender) => {
        const femaleImages = [
            'public/trainers/female1.jpg',
            'public/trainers/female2.jpg',
            'public/trainers/female3.jpg',
        ];
        const maleImages = [
            'public/trainers/male1.jpg',
            'public/trainers/male2.jpg',
            'public/trainers/male3.jpg',
        ];

        if (gender === 'female') {
            return femaleImages[Math.floor(Math.random() * femaleImages.length)];
        } else if (gender === 'male') {
            return maleImages[Math.floor(Math.random() * maleImages.length)];
        }
    };

    if (trainers.length === 0) {
        return <p>No trainers found matching the criteria.</p>;
    }

    return (
        <div>
            {trainers.map((trainer) => (
                <div key={trainer._id} className="trainer-card2">
                    <div className="trainer-icon2">
                        <img
                            src={getRandomImage(trainer.gender)}
                            alt={`${trainer.name} ${trainer.lastname}`}
                            className="trainer-image2"
                        />
                    </div>
                    <div className="trainer-info2">
                        <h3>{trainer.name} {trainer.lastname}</h3>
                        <div className="trainer-details2">
                            <p>Age: {trainer.age}</p>
                            <p>City: {trainer.city}</p>
                            <p>Postcode: {trainer.postcode}</p>
                            <p>Gender: {trainer.gender}</p>
                            <p>
                                {trainer.description.length > 200
                                    ? trainer.description.substring(0, 200) + '...'
                                    : trainer.description}
                            </p>
                        </div>
                        <Link to={`/trainer/${trainer._id}`}>
                            <button>Read more about {trainer.name}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrainerResults;
