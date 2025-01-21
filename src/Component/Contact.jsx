import React from "react";
import { illustration6 } from "../assest/image";
const Contact = () => {
  return (
    <div>
        {/* Contact */}
      <div className=" flex items-center space-x-4">
        <h3 className=" px-4 py-2 w-32 text-center text-sm font-bold text-black bg-[#B9FF66] rounded-md">
          Contact Us
        </h3>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      {/* Contact Form */}
      <div className=" grid grid-cols-2 max-md:grid-cols-1 mt-6 bg-[#F3F3F3] rounded-2xl overflow-x-hidden">
          <div className=" py-12  flex justify-center items-center">
            <form className=" flex flex-col justify-center items-center space-y-6" action="">
                <div>
                <label htmlFor="name">Name</label> <br />
                <input placeholder="Name" className=" bg-white px-4 py-2 rounded-md border-[1px] border-black" type="text" name="name" id="name" />
                </div>
                <div>
                <label htmlFor="email">Email*</label> <br />
                <input placeholder="Email" className=" bg-white px-4 py-2 rounded-md border-[1px] border-black" type="email" name="email" id="email" />
                </div>
                <div>
                <label htmlFor="message">Message*</label> <br />
                <textarea placeholder="Message" className=" bg-white px-4 py-2 rounded-md border-[1px] border-black" type="text" name="message" id="message" />
                </div>
                <button className=" text-white bg-black px-4 py-2 rounded-lg">Send message</button>
            </form>
          </div>
     
            <img className=" max-md:hidden max-[1000px]:translate-x-60  translate-x-[21rem] max-md:translate-x-60" src={illustration6} alt="illustration" />
         
      </div>
    </div>
  );
};

export default Contact;
