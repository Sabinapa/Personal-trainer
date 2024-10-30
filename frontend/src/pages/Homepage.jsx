import '../css/Homepage.css'
import PersonalTrainers from "../components/PersonalTrainers.jsx";


const Homepage = () => {
    return (
        <div className="homepage">
            <div className="naslovnica">
                <h1 className="h1-homepage">
                    <span className="white-text">Find Your </span>
                    <span className="brown-text">Perfect Personal Trainer</span>
                </h1>
                <h2 className="h2-homepage">
                    Connect with certified personal trainers near you
                    <br />
                    to achieve your fitness goals faster.
                </h2>
                <button className="cta-button">FIND YOUR PERSONAL TRAINER</button>
            </div>
            <div>
                <h1>MJAW</h1>
                <PersonalTrainers/>
            </div>
        </div>
    );
};
export default Homepage;