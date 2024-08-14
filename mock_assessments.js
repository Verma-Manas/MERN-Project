import React from 'react';
import amazon from './images/amazon.jpg';
import flipkart from './images/flipkart.jpg';
import google from './images/google.jpg';

// DATA
const mock = [
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link1'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link2'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link3'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link4'
    },
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link5'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link6'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link7'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link8'
    },
    {
        logo: flipkart,
        logoClass: 'flipkart-logo',  
        heading: "Intern Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Easy",
        link: '/link9'
    },
    {
        logo: amazon,
        logoClass: 'amazon-logo',
        heading: "SDE | Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Medium",
        link: '/link10'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "Hard",
        link: '/link11'
    },
    {
        logo: google,
        logoClass: 'google-logo',
        heading: "L4 Mock Assessment",
        prob: 12,
        duration: "120 Minutes",
        level: "All",
        link: '/link12'
    }
];

// LOOPING
const MockAssessments = () => {
    return (
        <main>
            <br/><br/>
            <h1 className='head'>Mock Assessments</h1><br/><br/><br/>
            <div className="mock-assessments-container">
                {mock.map((assessment, index) => (
                    <div key={index} className="mock-assessment-item">
                        <div className="mock-assessment-details">
                            <img className={`mock-assessment-logo ${assessment.logoClass}`} src={assessment.logo} alt={assessment.heading} />
                            <h2 className="mock-assessment-heading"><b>{assessment.heading}</b></h2>
                        </div>
                        <div className="mock-assessment-details mock-section">
                            <p className="mock-assessment-problems">Number of Problems: <b>{assessment.prob}</b></p>
                            <p className="mock-assessment-duration">Duration: <b>{assessment.duration}</b></p>
                            <p className="mock-assessment-level">Level: <b>{assessment.level}</b></p>
                        </div>
                        <div className="mock-assessment-details " >
                            <br/>
                            <a href={assessment.link} className='mock-assessment-button'>Start Test
                            </a>
                            {/* <button className="mock-assessment-button"></button> */}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MockAssessments;
