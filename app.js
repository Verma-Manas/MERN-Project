import React from "react";
import ReactDOM from "react-dom/client";
import Cards from './cards';
import CourseCards from "./course_cards";
import MainComponent from "./homepage";
import MockAssessments from "./mock_assessments";
import "./styles.css";
import WhyChooseUs from './why_choose_us';

const App = () => {
    return (
    <>
        {/* <NavBar/> */}
        <MainComponent/>
        <WhyChooseUs/>
        <Cards/>
        <MockAssessments />
        <CourseCards />
    </>
    );
};

const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);
