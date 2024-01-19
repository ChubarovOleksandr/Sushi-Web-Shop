import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Intro.scss';

export default class IntroSlider extends React.Component {
   render() {
      const settings = {
         dots: false,
         infinite: true,
         speed: 15000,
         slidesToShow: 5,
         initialSlide: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 700,
         cssEase: 'linear',
         arrows: false,
         pauseOnHover: false,
      };

      return (
         <Slider {...settings}>
            <div className="slider__item">висока якість</div>
            <div className="slider__item">на зв'язку</div>
            <div className="slider__item">швидка доставка</div>
            <div className="slider__item">новинки</div>
            <div className="slider__item">відмінний смак</div>
            <div className="slider__item">найкращий вибір</div>
         </Slider>
      );
   }
}