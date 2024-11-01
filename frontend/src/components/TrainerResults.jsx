import React from 'react';
import {Link} from "react-router-dom";

const TrainerResults = ({ trainers }) => {
    if (trainers.length === 0) {
        return <p>No trainers found matching the criteria.</p>;
    }

    return (
        <div className="trainer-results">
            {trainers.map((trainer) => (
                <div key={trainer._id} className="trainer-card">
                    <h3>{trainer.name} {trainer.lastname}</h3>
                    <p>Age: {trainer.age}</p>
                    <p>City: {trainer.city}</p>
                    <p>Postcode: {trainer.postcode}</p>
                    <p>Gender: {trainer.gender}</p>
                    <Link to={`/trainer/${trainer._id}`}>
                        <button>Read more about {trainer.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TrainerResults;
