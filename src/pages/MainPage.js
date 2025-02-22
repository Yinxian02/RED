import React, { useState, useEffect } from 'react';
import PreLoader from "../components/PreLoader";
import Home from "./Home";
import About from "./About";
import PastProjects from "./PastProjects";
import Fundraisers from "./Fundraisers";
import FollowUs from "./FollowUs";
import "../styles/MainPage.css";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const navigateToSection = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  return (
    <div className="main-container">
        {/* <PreLoader/> */}

        <Navbar navigateToSection={navigateToSection}/>
        
        <section className="section home-section">
            <Home/>
        </section>
        
        <section className="section about-section">
            <About/>
        </section>
        
        <section className="section projects-section">
            <PastProjects/>
        </section>

        <section className="section fundraisers-section">
            <Fundraisers/>
        </section>

        <section className="section follow-us-section">
            <FollowUs/>
        </section>
    </div>
  );
};

export default MainPage;