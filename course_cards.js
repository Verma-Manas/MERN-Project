import React from 'react';
import img1 from './images/Banner.jpg';
import img5 from './images/Frame 20933 (1).jpg';
import img6 from './images/Frame 20933 (2).jpg';
import img4 from './images/Frame 20933.jpg';
import img3 from './images/img3.jpg';
import img2 from './images/low_level_design.jpg';

// CourseCardDetails array
const CourseCardDetails = [
    {
        id: 1,
        image: img1,
        alt: 'Crack Design and Machine Coding Rounds',
        description: 'Crack Design and Machine Coding Rounds for Senior Software Engineer Roles and crack your dream job.',
        link: '/design-machine-coding', // Add the link here
    },
    {
        id: 2,
        image: img2,
        alt: 'DSA Essentials',
        description: 'A very concise program handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/dsa-essentials', // Add the link here
    },
    {
        id: 3,
        image: img3,
        alt: 'Master Data Structures & Algorithms',
        description: 'Master Data Structures & Algorithms and System Design. Crack Top-notch Tech roles.',
        link: '/data-structures-algorithms', // Add the link here
    },
    {
        id: 4,
        image: img4,
        alt: 'Course 4',
        description: 'A very concise program with curated and handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/course-4', // Add the link here
    },
    {
        id: 5,
        image: img5,
        alt: 'Course 5',
        description: 'A very concise program with curated and handpicked concepts, for you to master DSA quickly and crack your dream job.',
        link: '/course-5', // Add the link here
    },
    {
        id: 6,
        image: img6,
        alt: 'Course 6',
        description: 'Become a Python pro and unlock the door to endless career opportunities in Data Science and Software Development.',
        link: '/course-6', // Add the link here
    },
];

// CourseCards Component
const CourseCards = () => {
    return (
        <div className='Course_Cards_Container'>
            <h1 className="courses-heading">Explore Other Courses</h1>
            <div className="courses-grid">
                {CourseCardDetails.map(course => (
                    <div key={course.id} className="course-item">
                        <div className="course-image-wrapper">
                            <img src={course.image} alt={course.alt} className="course-image" />
                            <div className="course-text-overlay">
                                <p className="course-description">{course.description}</p>
                                <br />
                                <div className='know-btn-div'>
                                    <a href={course.link} className="course-know-more btn btn-container">
                                        Know More
                                    </a>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseCards;
