import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Images from './Images'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    useTransform: false
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

export default Carousel;