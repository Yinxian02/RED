import React from 'react';
import home from '../tadika kami full.png' 
import { motion } from "framer-motion";
import '../assets/Home.css'
import PreLoader from "../components/PreLoader";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const Home = () => {
    return (
      <>
        <PreLoader />
        <motion.div
          exit={{ transition }}
          className="transition2"
        />
        <div className='landing home-div'>
            <img src={home} className="home" alt="home" />
        </div>
      </>
    );
  };
  
export default Home;