import React from "react";

import Slider from "react-slick";
import HeroImage from "../assets/images/shopping 7.png";
import HeroImage2 from "../assets/images/woman 1.png";
import HeroImage3 from "../assets/images/man 2.png";
import { Link } from "react-router-dom";
import Bannner from "./Bannner";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2500,
    pauseOnHover: true
  }
  return (
    <Slider {...settings}>
      <Bannner
      heading="Welcome to Your New Favorite Store"
      description=" Fresh arrivals and exclusive offers just for you"
      buttonText="SHOP NOW"
      image={HeroImage}
      
      />
      <Bannner
      heading="Discover the Latest Trends"
      description="Elevate your style with our new arrivals"
      buttonText="SIGN UP NOW"
      image={HeroImage2}
      imgClassName='mt-10'
      
      />
      <Bannner
      heading="Unbeatable Deals Await"
      description="Unbeatable Deals Await"
      buttonText="EXPLORE DEALS"
      image={HeroImage3}
      
      />
       
  </Slider>
   
  );
};

export default Hero;
