import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Slider1 from '../../assets/Slider1.png'
import Slider2 from '../../assets/Slider2.png'
import Slider3 from '../../assets/Slider3.png'
import Slider4 from '../../assets/Slider4.png'


const SliderSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className='mb-10'>
    
    <Slider {...settings}>
      <div>
        <img src={Slider1} alt=""/>
      </div>
      <div>
      <img src={Slider2} alt=""/>
      </div>
      <div>
      <img src={Slider3} alt=""/>
      </div>
      <div>
      <img src={Slider4} alt=""/>
      </div>
      <div>
      <img src={Slider1} alt=""/>
      </div>
      <div>
      <img src={Slider2} alt=""/>
      </div>
      <div>
      <img src={Slider3} alt=""/>
      </div>
      
    </Slider> 
    </div>
    
    // <div className='flex justify-between'>
    // <img src={Slider1} alt=""/>
    // <img src={Slider2} alt=""/>
    // <img src={Slider3} alt=""/>
    // <img src={Slider4} alt=""/>
    // </div>
  )
}

export default SliderSection
