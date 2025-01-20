import React from "react";
import { MdArrowForward } from "react-icons/md";
const Case_Study = () => {
  return (
    <div>
      <div className=" flex items-center space-x-4">
        <h3 className=" px-4 py-2 w-32 text-center text-sm font-bold text-black bg-[#B9FF66] rounded-md">
          Case Studies
        </h3>
        <p>
          Explore Real-Life Examples of Our Proven Digital <br /> Marketing
          Success through Our Case Studies
        </p>
      </div>
      {/* Case Study */}
      <div className=" bg-black max-md:hidden rounded-3xl grid grid-rows-1 grid-cols-3 gap-6 mt-4 px-12 py-16 text-white">
        <div className=" border-r-[1px] border-white space-y-6">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
        <div className=" border-r-[1px] border-white space-y-6">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
        <div className=" space-y-6">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
      </div>
      <div className=" md:hidden flex space-x-6 space-y-6 overflow-x-scroll text-white">
      <div className=" bg-black flex-shrink-0 space-y-6 mt-6 max-w-[70vw] rounded-2xl px-12 py-6">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
        <div className=" bg-black flex-shrink-0 space-y-6 max-w-[70vw] rounded-2xl  px-12 py-6">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
        <div className=" bg-black flex-shrink-0 space-y-6 max-w-[70vw] rounded-2xl  px-12 py-6">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className=" flex space-x-2 items-center text-[#B9FF66]">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case_Study;
