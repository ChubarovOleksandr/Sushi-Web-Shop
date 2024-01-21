import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Intro.scss';

export const IntroSlider = () => {

   const introSliderRef = useRef<Slider>(null);

   useEffect(() => {
      const handleVisibilityChange = () => {
         if (document.visibilityState === 'visible') {
            introSliderRef.current?.slickPlay();
         } else {
            introSliderRef.current?.slickPause();
         }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
         document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
   }, []);

   const settings = {
      dots: false,
      infinite: true,
      rtl: false,
      speed: 5000,
      slidesToShow: 5,
      initialSlide: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300,
      cssEase: 'linear',
      arrows: false,
      pauseOnHover: false,
   };

   return (
      <Slider ref={introSliderRef} {...settings}>
         <div className="slider__item">висока якість</div>
         <div className="slider__item">на зв'язку</div>
         <div className="slider__item">швидка доставка</div>
         <div className="slider__item">новинки</div>
         <div className="slider__item">відмінний смак</div>
         <div className="slider__item">найкращий вибір</div>
      </Slider>
   )
}