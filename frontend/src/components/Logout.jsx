import React from 'react';
import '../css/Logout.css';

const Logout = () => {
    return (
        <div className="logout-modal-overlay">
            <div className="logout-modal">
                <h2>You have been logged out!</h2>
                <p>Goodbye! We can't wait to see you again soon!</p>
            </div>
        </div>
    );
};

export default Logout;