import '../css/Homepage.css'


const Homepage = () => {
    return (
        <div className="homepage">
            <h1>
                <span className="white-text">Find Your </span>
                <span className="brown-text">Perfect Personal Trainer</span>
            </h1>
            <h2>
                Connect with certified personal trainers near you
                {<br/>}
                to achieve your fitness goals faster.
            </h2>
            <button className="cta-button">FIND YOUR PERSONAL TRAINER</button>
        </div>
    );
};
export default Homepage;