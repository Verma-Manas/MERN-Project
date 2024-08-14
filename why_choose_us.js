import highQualityContent from './images/highQualityContent.png';
import interviewReady from './images/interview.png';
import realWorldExperience from './images/realWorldExperience.png';

// DATA
const whyChooseUsData = [
    {
        image: interviewReady,
        imageClass: 'interview-ready-image',
        title: "Get Interview Ready",
        description: "Sharpen your coding skills & conquer interview nerves. Practice real questions, get expert feedback, land your dream job."
    },
    {
        image: highQualityContent,
        imageClass: 'high-quality-content-image',
        title: "Access High Quality Content for Free",
        description: "Empower Your Learning Journey. Dive Deep into Free High-Quality Content."
    },
    {
        image: realWorldExperience,
        imageClass: 'real-world-experience-image',
        title: "Practice with Real-World Experience",
        description: "Level Up Your Skills. Tackle Real-World Challenges & Gain Practical Experience."
    }
];

// COMPONENT
const WhyChooseUs = () => {
    return (
        <main className='why-choose-us-main-content'>
            <h1 className="why-choose-us-centered-heading">Why Choose Us?</h1>
            <div className="why-choose-us-flex-container">
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className="why-choose-us-card">
                        <img
                            src={item.image}
                            className={`why-choose-us-card-image ${item.imageClass}`} 
                            alt={item.title}
                        />
                        <h2 className="why-choose-us-card-title">{item.title}</h2>
                        <p className='why-choose-us-card-description'>{item.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default WhyChooseUs;
