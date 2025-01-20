import React from "react";
import { frame } from "../assest/image";

const CTA_block = () => {
  return (
    <div className=" grid grid-rows-1 grid-cols-2 max-sm:grid-cols-1 bg-gray-100 rounded-2xl px-8 py-4 overflow-auto my-12">
      <div className=" flex flex-col justify-center space-y-4">
        <h1 className=" text-3xl font-semibold">Let’s make things happen</h1>
        <p className=" text-lg font-medium">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className=" text-white w-56 bg-black px-4 py-2 rounded-lg">Get your free proposal</button>
      </div>
      <div className="  flex justify-center">
      <img className=" max-sm:hidden block h-[18rem]" src={frame} alt="" />
      </div>
    </div>
  );
};

export default CTA_block;
