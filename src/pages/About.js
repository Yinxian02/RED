import React from 'react'
import '../styles/About.css'
import tadikaPolaroid from '../assets/design/tadika kami front.jpeg'
import Objectives from '../components/Objectives'

function About() {
  return (
    <>
      <div className='about-red-div'>
        <div className='tadika-polaroid-div'>
          <div className='tadika-polaroid'>
            <img className='tadika-image' src={tadikaPolaroid} alt="Tadika Polaroid" />
          </div>
        </div>
        <div className='about-text-div'>
          <h1 className='about-text-title'>RURAL EDUCATION DEVELOPMENT PROJECT BORNEO</h1>
          <p className='about-text-description'><mark>Bringing sustainable educational development to marginalised, rural communities in Borneo.</mark></p>
        </div>
      </div>

      <div className='about-description-div'>
        <div className='about-description-card-div'>
          <p className='about-description-description'>Founded in the department of Civil and Environmental Engineering of Imperial College London in 2015, RED is a student-led project that aims to bridge the education disparity in rural areas of Borneo. 
             <br /><br /> 
            RED focuses on the development of education infrastructure and encourages the practical application of skills and knowledge gained by students throughout their education at Imperial. Students will be involved in the design and build process of these education facilities over the summer, giving them the opportunity to hone a variety of both engineering and non-engineering related skills. 
             <br /><br />
            This is done by keeping in line with two key points: <span className="bold-text">education</span> and <span className="bold-text">engineering</span>, which fuel the main objectives of RED.</p>
        </div>
      </div>

      <div className='aims-and-objectives-div'>
        <div className='aims-and-objectives-title-div'>
          <h1 className='aims-and-objectives-title'>AIMS & OBJECTIVES</h1>
        </div>
        <Objectives />
      </div>
    </>
  );
}

export default About;