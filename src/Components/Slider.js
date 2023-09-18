// import React, { Component } from "react";
import Slider from "react-slick";
import garments1 from "../assets/12121.webp"
import garments2 from "../assets/lbd.jpg"
import garments3 from "../assets/shutterstock_307344794-scaled.webp"
import garments4 from "../assets/banner_superslide.jpg"
import garments5 from "../assets/garments3.jpg"
import garments6 from "../assets/garments2.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


 const SimpleSliderr =()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={garments1}  alt="" />
          </div>
          <div>
          <img src={garments6} alt="" />
          </div>
          <div>
          <img src={garments3} alt="" />
          </div>
          <div>
          <img src={garments4} alt="" />
          </div>
          <div>
          <img src={garments2} alt="" />
          </div>
          <div>
          <img src={garments5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }

  export default SimpleSliderr