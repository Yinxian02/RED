import React, { useState, useEffect } from 'react';
import PreLoader from "../components/PreLoader";
import Home from "./Home";
import About from "./About";
import PastProjects from "./PastProjects";
import Fundraisers from "./Fundraisers";
import FollowUs from "./FollowUs";
import "../styles/MainPage.css";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  
  const navigateToSection = (sectionIndex) => {
    if (sectionIndex > activeSection) {
      setTransitionProgress(100);
      setTimeout(() => {
        setActiveSection(sectionIndex);
        setTransitionProgress(0);
      }, 500);
    } 

    else if (sectionIndex < activeSection) {
      setTransitionProgress(-100);
      setTimeout(() => {
        setActiveSection(sectionIndex);
        setTransitionProgress(0);
      }, 500);
    }
  };

  useEffect(() => {
    let lastWheelEvent = Date.now();
    
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastWheelEvent > 50) {
        e.preventDefault();
        
        setTransitionProgress(prev => {
          const newProgress = Math.min(100, Math.max(-100, prev + (e.deltaY > 0 ? 5 : -5)));
          
          if (newProgress >= 100 && activeSection < 4 && activeSection !== 0) {
            setTimeout(() => {
              setActiveSection(prev => prev + 1);
              setTransitionProgress(0);
            }, 500);
          } else if (newProgress <= -100 && activeSection > 0 && activeSection !== 4) {
            setTimeout(() => {
              setActiveSection(prev => prev - 1);
              setTransitionProgress(0);
            }, 500);
          }

          if (activeSection === 0 && e.deltaY < 0) return 0;
          
          return newProgress;
        });
        
        lastWheelEvent = now;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection]);

  const getTransitionStyles = (sectionIndex) => {
    const isActive = sectionIndex === activeSection;
    const isNext = sectionIndex === activeSection + 1;
    const isPrevious = sectionIndex === activeSection - 1;
    
    if (isActive) {
      return {
        transform: `translateY(${-transitionProgress}%)`,
        opacity: 1,
        zIndex: 2
      };
    } else if (isNext && transitionProgress > 0) {
      return {
        transform: `translateY(${100 - transitionProgress}%)`,
        opacity: 1,
        zIndex: 1
      };
    } else if (isPrevious && transitionProgress < 0) {
      return {
        transform: `translateY(${-100 - transitionProgress}%)`,
        opacity: 1,
        zIndex: 1
      };
    } else {
      return {
        transform: sectionIndex > activeSection ? 'translateY(100%)' : 'translateY(-100%)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  return (
    <div className="main-container">
        <PreLoader/>
        
        <section className="section home-section" style={getTransitionStyles(0)}>
            <Home/>
        </section>
        
        <section className="section about-section" style={getTransitionStyles(1)}>
            <About/>
        </section>
        
        <section className="section projects-section" style={getTransitionStyles(2)}>
            <PastProjects/>
        </section>

        <section className="section fundraisers-section" style={getTransitionStyles(3)}>
            <Fundraisers/>
        </section>

        <section className="section follow-us-section" style={getTransitionStyles(4)}>
            <FollowUs/>
        </section>
    </div>
  );
};

export default MainPage;