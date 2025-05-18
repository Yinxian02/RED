import React, { useState, useEffect, useRef, useMemo } from 'react';
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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const fundraisersRef = useRef(null);
  const followUsRef = useRef(null);

  const sectionRefs = useMemo(() => [
    homeRef, aboutRef, projectsRef, fundraisersRef, followUsRef
  ], []);

  const navigateToSection = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  useEffect(() => {
    const targetRef = sectionRefs[activeSection];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection, sectionRefs]);

  return (
    <div className="main-container">
        {/* <PreLoader/> */}

        <Navbar navigateToSection={navigateToSection}/>
        
        <section className="section home-section" ref={homeRef}>
            <Home/>
        </section>
        
        <section className="section about-section" ref={aboutRef}>
            <About/>
        </section>
        
        <section className="section projects-section" ref={projectsRef}>
            <PastProjects/>
        </section>

        <section className="section fundraisers-section" ref={fundraisersRef}>
            <Fundraisers/>
        </section>

        <section className="section follow-us-section" ref={followUsRef}>
            <FollowUs/>
        </section>
    </div>
  );
};

export default MainPage;