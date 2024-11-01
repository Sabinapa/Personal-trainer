import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TrainerResults from './TrainerResults.jsx';

const TrainerSearch = () => {
    const [filters, setFilters] = useState({
        name: '',
        lastname: '',
        age: '',
        city: '',
        postcode: '',
        priceRange: '',
        typeWorkout: [],
        certifications: [],
        gender: '',
        language: [],
        environment: ''
    });
    const [trainers, setTrainers] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);
    const [workoutTypes, setWorkoutTypes] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const priceRangeResponse = await axios.get('/api/data/price-ranges');
                setPriceRanges(priceRangeResponse.data);

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

    const handleInputChange = (e) => {
        const { name, value, options, multiple } = e.target;

        if (multiple && options) {
            // Če je `select` z več možnostmi (`multiple`), pridobi vse izbrane vrednosti
            const values = Array.from(options)
                .filter(option => option.selected)
                .map(option => option.value);

            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: values // Posodobi stanje z vsemi izbranimi vrednostmi
            }));
        } else {
            // Če gre za enojno vrednost (npr. input ali navaden select)
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value // Posodobi stanje z eno vrednostjo
            }));
        }

        console.log('Filters after updating:', filters);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/trainers/filter', {
                params: filters
            });
            console.log(response.data);
            setTrainers(response.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
        }
    };

    return (
        <div className="trainer-search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={filters.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={filters.lastname}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={filters.city}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="postcode"
                    placeholder="Postcode"
                    value={filters.postcode}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={filters.age}
                    onChange={handleInputChange}
                />
                <select
                    name="gender"
                    value={filters.gender}
                    onChange={handleInputChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {/* Price Range Select */}
                <select
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleInputChange}
                >
                    <option value="">Select Price Range</option>
                    {priceRanges.map((range) => (
                        <option key={range._id} value={range._id}>
                            {range.label}
                        </option>
                    ))}
                </select>
                {/* Workout Type Select - Multiple Options */}
                <select
                    name="typeWorkout"
                    multiple
                    value={filters.typeWorkout}
                    onChange={handleInputChange}
                >
                    <option value="">Select Workout Type</option>
                    {workoutTypes.map((workout) => (
                        <option key={workout._id} value={workout._id}>
                            {workout.name}
                        </option>
                    ))}
                </select>

                {/* Certifications Select - Multiple Options */}
                <select
                    name="certifications"
                    multiple
                    value={filters.certifications}
                    onChange={handleInputChange}
                >
                    <option value="">Select Certification</option>
                    {certifications.map((cert) => (
                        <option key={cert._id} value={cert._id}>
                            {cert.name}
                        </option>
                    ))}
                </select>

                {/* Language Select - Multiple Options */}
                <select
                    name="language"
                    multiple
                    value={filters.language}
                    onChange={handleInputChange}
                >
                    <option value="">Select Language</option>
                    {languages.map((lang) => (
                        <option key={lang._id} value={lang._id}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <select
                    name="environment"
                    value={filters.environment}
                    onChange={handleInputChange}
                >
                    <option value="">Select Training Environment</option>
                    <option value="gym">Gym</option>
                    <option value="online">Online Coaching</option>
                    <option value="hybrid">Hybrid</option>
                </select>

                <button type="submit">Search</button>
            </form>
            <TrainerResults trainers={trainers}/>
        </div>
    );
};

export default TrainerSearch;
