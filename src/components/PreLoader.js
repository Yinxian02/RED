import React, { useEffect } from "react";
import logo from '../assets/logo.png' 
import { preLoaderAnim } from "../animations";
import '../styles/PreLoader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="texts-container">
        <span>RED</span>
        <span>PROJECT</span>
        <span>BORNEO</span>
      </div>
    </div>
  );
};

export default PreLoader;