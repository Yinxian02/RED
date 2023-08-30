import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import '../assets/PreLoader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>RED</span>
        <span>PROJECT</span>
        <span>BORNEO</span>
      </div>
    </div>
  );
};

export default PreLoader;