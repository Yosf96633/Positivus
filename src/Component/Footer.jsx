import React from "react";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";
import { logo_white } from "../assest/image";
const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12 rounded-t-3xl mt-12">
      {/* Footer's header */}
      <header className=" flex max-md:flex-col justify-between space-y-4 max-md:items-center px-14 items-center py-2">
        <img className=" h-6" src={logo_white} alt="logo" />
        <nav className=" space-x-6 flex max-md:flex-col max-md:space-y-4">
          <a className=" px-6" href="">About us</a>
          <a href="">Services</a>
          <a href="">Use Cases</a>
          <a href="">Pricing</a>
          <a href="">Blogs</a>
        </nav>
        <div className=" flex space-x-8 text-3xl max-md:hidden">
          <SiFacebook />
          <SiLinkedin />
          <SiX/>
        </div>
      </header>
      {/* Contact */}
      <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-4 grid-rows-1 py-6 border-b-[1px] mx-16">
         <div className=" space-y-4 max-md:flex flex-col justify-center items-center">
             <span className="bg-[#B9FF66] text-black px-2 py-1 rounded-lg">Contact us:</span>
             <p>Email: info@positivus.com</p>
             <p>Phone: 555-567-8901</p>
             <p>Address: 1234 Main St <br />
             Moonstone City, Stardust State 12345</p>
         </div>
         <div className=" flex justify-center items-center">
            <div className=" bg-[#292A32] p-12 max-md:p-6 space-y-4  flex max-md:flex-col justify-center md:space-x-4 rounded-2xl">
                 <input placeholder="Email"  className=" rounded-md bg-[#292A32] border-[1px]  px-2 py-1 border-white" type="text" />
                 <button className=" bg-[#B9FF66]  rounded-lg px-4 py-2 text-black ">Subscribe to news</button>
            </div>

         </div>
         <div className=" md:hidden flex space-x-12 text-3xl justify-center items-center py-6">
         <SiFacebook />
          <SiLinkedin />
          <SiX/>
         </div>
      </div>
      {/* CopyRight */}
      <p className=" p-14">© 2023 Positivus. All Rights Reserved. <span className=" underline"> Privacy Policy</span></p>

    </footer>
  );
};

export default Footer;
