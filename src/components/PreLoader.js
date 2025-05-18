import React, { useEffect } from "react";
import logo from '../assets/design/logo.png' 
import { preLoaderAnim } from "../animations/PreLoaderAnimation";
import '../styles/PreLoader.css'
import VanAnimation from "../animations/VanAnimation";

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
        <VanAnimation />
      </div>

      <div className="texts-container">
          <span className="red-title">{wrapLetters("RED PROJECT BORNEO")}</span>
      </div>
    </div>

  );
};

export default PreLoader;