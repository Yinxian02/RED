import React from 'react'
import '../styles/About.css'
import tadikaKami from '../assets/tadika kami front.jpeg'
import FadeIn from "react-fade-in";

function About() {
  return (
    <>
      <FadeIn delay={100} transitionDuration={300} div className="about-red-div">  
        {/* <div className="item"> */}
          <div className="polaroid">
            <img src={tadikaKami}/>
          </div>
          <div className="about-red-text-div">
            <h1 class="title">ABOUT RED</h1>
            <p>

            </p>
          </div> 
        {/* </div> */}
      </FadeIn>
        {/* <div className='title-div'>
          <h1 classNames='aims-title'>AIMS & OBJECTIVES</h1>
        </div> */}
    </>
  );
}

export default About;