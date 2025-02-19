import React from 'react';
import home from '../assets/tadika kami full.png'
import '../styles/Home.css'
import TopNav from "../components/TopNav";

const Home = () => {
    return (
      <>
        <TopNav />
        <div className='home-div'>
          <img src={home} className="home" alt="home"/>
        </div>
      </>
    );
  };
  
export default Home;

