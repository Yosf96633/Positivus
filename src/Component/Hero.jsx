import React from "react";
import {illustration } from "../assest/image";
import { SiAmazon, SiDribbble , SiHubspot , SiNotion , SiNetflix , SiZoom } from "react-icons/si";

const Hero = () => {
  return (
  
      <div className=" grid grid-cols-2 max-sm:grid-cols-1 my-8">
        <div className=" flex space-y-2 flex-col justify-between py-4 md:max-w-[80%]">
          <h2 className=" text-6xl font-semibold tracking-wider">Navigating the digital landscape for success</h2>
          <img className=" sm:hidden" src={illustration} alt="hero_image" />
          <p className="text-2xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className=" bg-black sm:w-48 text-white px-4 py-2 rounded-md">Book a consultation</button>
        </div>
        <div className=" max-sm:hidden flex justify-center items-center">
          <img src={illustration} alt="hero_image" />
        </div>
      </div>
   
  );
};

export default Hero;
