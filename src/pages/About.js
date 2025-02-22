import React from 'react'
import '../styles/About.css'
import tadikaPolaroid from '../assets/tadika kami.png'
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
          <h1>RURAL EDUCATION DEVELOPMENT PROJECT BORNEO</h1>
          <p>Our mission is to bring sustainable educational development to marginalised, rural communities in Borneo.
              Led by students at Imperial College London, this project aims to assist in community development with an emphasis on EDUCATION & ENGINEERING</p>
        </div>
      </div>
    </>
  );
}

export default About;