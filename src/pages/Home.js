import React from 'react';
import home from '../assets/tadika kami full.png'
import '../styles/Home.css'
import PreLoader from "../components/PreLoader";
import TopNav from "../components/TopNav";

const Home = () => {
    return (
      <>
        <PreLoader />
        <TopNav />
        <div className='home-div'>
            <img src={home} className="home" alt="home" />
        </div>
      </>
    );
  };
  
export default Home;