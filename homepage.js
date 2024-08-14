import img1 from './images/illustration.png';

const HomePage = () => {
    return (
        <main className="homepage">
            <div className="homepage-content">
                <div className="homepage-text">
                    <h1>
                        Crack your next software engineering job. Practice free mock assessments
                    </h1>
                    <p>
                        Try your hands on mock assessments and evaluate yourself on problems recently asked in hiring rounds of top tech companies.
                    </p>
                    <br />
                    <button className="homepage-button">
                        <h3>Start Practicing</h3>
                    </button>
                </div>
                <img className="homepage-image" src={img1} alt="Tech" />
            </div>
        </main>
    );
};

export default HomePage;
