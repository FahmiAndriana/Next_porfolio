// components/CustomCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomCarousel = ({ settings, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div>
      <Slider {...mergedSettings}>
        {children}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
