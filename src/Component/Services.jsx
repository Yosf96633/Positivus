import React from "react";
import { MdArrowForward } from "react-icons/md";
import { email, illustration1, illustration2, illustration3 , illustration4, illustration5, illustration6} from "../assest/image";
const Services = () => {
  return (
    <div>
      {/* Services Heading  */}
      <div className=" flex items-center space-x-4">
        <h3 className=" px-4 py-2 w-32 text-center text-sm font-bold text-black bg-[#B9FF66] rounded-md">
          Services
        </h3>
        <p>
          At our digital marketing agency, we offer a range of services to help{" "}
          <br />
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Services Card */}
      <div className=" grid grid-cols-2 grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-6 gap-8 mt-6">
        <div className=" grid grid-rows-1 bg-gray-200 grid-cols-2 border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
          <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
            <span className=" bg-[#B9FF66] px-2 py-1 rounded-md">
              Search Engine Optimization
            </span>
            <div className=" flex space-x-2 items-center">
              <MdArrowForward />
              <p>Learn more</p>
            </div>
          </div>
          <img src={illustration1} alt="" />
        </div>
        <div className=" grid grid-rows-1  bg-[#B9FF66] grid-cols-2 h-full border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
        <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
        <span className=" bg-white px-2 py-1 rounded-md">
              Pay-per-click advertising
            </span>
            <div className=" flex space-x-2 items-center">
              <MdArrowForward />
              <p>Learn more</p>
            </div>
          </div>
          <img src={illustration2} alt="" />
        </div>
        <div className=" grid grid-rows-1 bg-black grid-cols-2 h-full border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
        <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
        <span className=" bg-white px-2 py-1 rounded-md">
            Social Media Marketing
            </span>
            <div className=" flex space-x-2 items-center">
              <MdArrowForward className=" text-white"/>
              <p className=" text-white">Learn more</p>
            </div>
          </div>
          <img src={illustration3} alt="" />
        </div>
        <div className=" grid grid-rows-1 bg-gray-200 grid-cols-2 h-full border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
        <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
        <span className="bg-[#B9FF66]   px-2 py-1 rounded-md">
             Email Marketing
            </span>
            <div className=" flex space-x-2 items-center">
              <MdArrowForward />
              <p>Learn more</p>
            </div>
          </div>
          <img src={email} alt="" />
        </div>
        <div className=" grid grid-rows-1 bg-[#B9FF66]  grid-cols-2 h-full border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
        <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
        <span className="bg-white  px-2 py-1 rounded-md">
             Content Creation
            </span>
            <div className=" flex space-x-2 items-center">
              <MdArrowForward />
              <p>Learn more</p>
            </div>
          </div>
          <img src={illustration4} alt="" />
        </div>
        <div className=" grid grid-rows-1 bg-black grid-cols-2 h-full border-black border-[1px] p-8 rounded-3xl border-b-[6px]">
        <div className=" flex flex-col justify-center w-32 font-semibold space-y-4">
        <span className="bg-white   px-2 py-1 rounded-md">
              Analytics and Marketing
            </span>
            <div className=" flex space-x-2 items-center text-white">
              <MdArrowForward />
              <p>Learn more</p>
            </div>
          </div>
          <img src={illustration5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
