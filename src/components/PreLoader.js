import React, { useEffect } from "react";
import logo from '../assets/logo.png' 
import { preLoaderAnim } from "../animations";
import '../styles/PreLoader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const wrapLetters = (word) => {
    return word.split("").map((letter, index) => (
      <span key={index} className="letter">{letter}</span>
    ));
  };

  return (
    <div className="preloader">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="texts-container">
          <span>{wrapLetters("RED PROJECT BORNEO")}</span>
      </div>
    </div>

  );
};

export default PreLoader;