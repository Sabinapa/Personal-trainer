import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [priceRanges, setPriceRanges] = useState([]);
    const [workoutTypes, setWorkoutTypes] = useState([]);
    const [selectedWorkouts, setSelectedWorkouts] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [selectedCertifications, setSelectedCertifications] = useState([]);
    const [gender, setGender] = useState('');
    const [language , setLanguages] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [environment, setTrainingEnvironment] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching price ranges...");

                const response = await axios.get('/api/data/price-ranges');
                console.log("Price ranges fetched:", response.data);
                setPriceRanges(response.data);

                const workoutTypeResponse = await axios.get('/api/data/type-workout');
                setWorkoutTypes(workoutTypeResponse.data);

                const certificationResponse = await axios.get('/api/data/experience');
                setCertifications(certificationResponse.data);

                const languageResponse = await axios.get('/api/data/language');
                setLanguages(languageResponse.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleWorkoutChange = (e) => {
        const { value, checked } = e.target;
        setSelectedWorkouts((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((id) => id !== value)
        );
    };

    const handleCertificationChange = (e) => {
        const { value, checked } = e.target;
        setSelectedCertifications((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((id) => id !== value)
        );
    };

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLanguages((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((id) => id !== value)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({ name, username, email, password, description, age, city, postcode, priceRange, selectedWorkouts, selectedCertifications, gender, selectedLanguages,environment });

        // Zberi podatke iz obrazca
        const formData = {
            name, username, email, password,
            description, age, city, postcode, priceRange,
            typeWorkout: selectedWorkouts,
            certifications: selectedCertifications,
            gender,
            language : selectedLanguages,
            environment,};

        try {
            const response = await axios.post('/api/trainers', formData);  // Pošlji POST zahtevo za shranjevanje podatkov
            console.log("Trainer saved:", response.data);
        } catch (error) {
            console.error("Error saving trainer:", error);
        }
    };

    return (
        <div className="main">
        <form onSubmit={handleSubmit}>
            <h2>Register as a Personal Trainer</h2>
            <div className="form-section">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                       required/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                       required/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)} required/>
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
                <input type="number" placeholder="Postcode" value={postcode}
                       onChange={(e) => setPostcode(e.target.value)} required/>
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required/>
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
                          required/>
            </div>

            <div className="form-section">
                <label>Gender:</label>
                <div className="gender-options">
                    <label><input type="radio" value="male" checked={gender === "male"}
                                  onChange={(e) => setGender(e.target.value)}/> Male</label>
                    <label><input type="radio" value="female" checked={gender === "female"}
                                  onChange={(e) => setGender(e.target.value)}/> Female</label>
                </div>
            </div>

            <div className="form-section">
                <label>Price Range:</label>
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} required>
                    <option value="">Select a price range</option>
                    {priceRanges.map((range) => (
                        <option key={range._id} value={range._id}>{range.label}</option>
                    ))}
                </select>
            </div>
            <div className="form-section">
                <label>Workout Types:</label>
                <div className="checkbox-group">
                    {workoutTypes.map((workout) => (
                        <label key={workout._id}>
                            <input type="checkbox" value={workout._id} checked={selectedWorkouts.includes(workout._id)}
                                   onChange={handleWorkoutChange}
                            />
                            {workout.name}
                        </label>
                    ))}
                </div>
            </div>
            <div className="form-section">
                <label>Certifications:</label>
                <div className="checkbox-group">
                    {certifications.map((cert) => (
                        <label key={cert._id}>
                            <input type="checkbox" value={cert._id} checked={selectedCertifications.includes(cert._id)}
                                   onChange={handleCertificationChange}/>
                            {cert.name}
                        </label>
                    ))}
                </div>
            </div>
            <div className="form-section">
                <label>Languages:</label>
                <div className="checkbox-group">
                    {language.map((language) => (
                        <label key={language._id}>
                            <input type="checkbox" value={language._id}
                                   checked={selectedLanguages.includes(language._id)} onChange={handleLanguageChange}/>
                            {language.name}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-section">
                <label>Training Environment:</label>
                <div className="environment-options">
                    <label><input type="radio" value="gym" checked={environment === "gym"}
                                  onChange={(e) => setTrainingEnvironment(e.target.value)}/> Gym</label>
                    <label><input type="radio" value="online" checked={environment === "online"}
                                  onChange={(e) => setTrainingEnvironment(e.target.value)}/> Online Coaching</label>
                    <label><input type="radio" value="hybrid" checked={environment === "hybrid"}
                                  onChange={(e) => setTrainingEnvironment(e.target.value)}/> Hybrid</label>
                </div>
            </div>

            <button className="register-button" type="submit">Register</button>
        </form>
        </div>
    );
};

export default Register;
