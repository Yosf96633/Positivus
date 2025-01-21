import React from "react";
import {
  picture,
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
} from "../assest/image";
import { SiLinkedin } from "react-icons/si";
const Team = () => {
  return (
    <div className=" flex flex-col my-8">
      {/* Team */}
      <div className=" flex items-center space-x-4">
        <h3 className=" px-4 py-2 w-32 text-center text-sm font-bold text-black bg-[#B9FF66] rounded-md">
          Team
        </h3>
        <p>
          Meet the skilled and experienced team behind <br /> our successful
          digital marketing strategies
        </p>
      </div>
      {/* Team cards */}
      <div className=" grid grid-rows-2 grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-6 gap-12 mt-6">
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
        <div className=" flex justify-between py-8 border-b-[1px] border-black">
            <img src={picture} alt="picture" />
            <div className=" self-end">
              <h1>John Smith</h1>
              <p>CEO and Founder</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>
        </div>
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
          <div className=" flex justify-between py-8 border-b-[1px] border-black">
            <img src={picture1} alt="picture1" />
            <div className=" self-end ">
              <h1>Jane Doe</h1>
              <p>Director of Operations</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </div>
        </div>
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
        <div className=" flex justify-between py-8 border-b-[1px] border-black">
            <img src={picture2} alt="picture2" />
            <div className=" self-end">
              <h1>Michael Brown</h1>
              <p>Senior SEO Specialist</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization{" "}
          </div>
        </div>
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
        <div className=" flex justify-between py-8 border-b-[1px] border-black">
            <img src={picture3} alt="picture3" />
            <div className=" self-end">
              <h1>Emily Johnson</h1>
              <p>PPC Manager</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
          3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
          </div>
        </div>
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
        <div className=" flex justify-between py-8 border-b-[1px] border-black">
            <img src={picture4} alt="picture4" />
            <div className=" self-end">
              <h1  h1>Brian Williams</h1>
              <p>Social Media Specialistr</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
          4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
          </div>
        </div>
        <div className=" p-12 rounded-3xl border-black border-[1px] border-b-8">
        <div className=" flex  justify-between py-8 border-b-[1px] border-black">
            <img src={picture5} alt="picture5" />
            <div className=" self-end ">
              <h1>Sarah Kim</h1>
              <p>Content Creator</p>
            </div>
            <SiLinkedin className=" text-3xl"/>
          </div>
          <div className=" mt-4">
          2+ years of experience in writing and editing
          Skilled in creating compelling, SEO-optimized content for various industries
          </div>
        </div>
      </div>
       <div className=" mt-6 self-end">
         <button className=" text-white bg-black px-4 py-2 rounded-lg">See all team</button>
       </div>
    </div>
  );
};

export default Team;
