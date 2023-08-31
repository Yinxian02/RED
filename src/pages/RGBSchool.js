import React from 'react'
// import dinoCard from '../assets/red dino.png' 
import '../styles/RGBSchool.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Images from '../components/Images'

const RGBSchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="content">
        <div className="container">
            <Slider {...settings}>
                {Images.map((item) => (
                    <div key={item.id}>
                        <img src={item.url} alt={item.alt} className="img" />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  );
};

export default RGBSchool;