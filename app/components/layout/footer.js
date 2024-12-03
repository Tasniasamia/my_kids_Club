import Image from "next/image";
import React from "react";
import { FaPinterest,FaFacebook,FaLinkedinIn  } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[url(/footer_bg.png)] bg-cover bg-no-repeat ">
      <div className="container flex justify-between items-center md:py-[150px] py-[60px]">
        <div>
          <Image
            src="/logo.png"
            height={136.69}
            width={70}
            className="w-[136.69px] h-[70px] object-cover"
          />
          <p className="text-[18px] font-semibold leading-[26px] text-footertext sm:w-[342px] w-[300px] mt-[36px] mb-[20px]">
            Empowering kids through fun, skill-building adventures. Stay
            connected for updates and support. © KidStick. All rights reserved.
          </p>
          <ul className="flex gap-[12px] items-center">
            <li className="h-[20px] w-[20px]  bg-white hover:bg-primary duration-300 transition-all flex justify-center items-center rounded-full"><FaLinkedinIn size={14} className="text-[#223668]"/></li>
            <li ><FaFacebook className="text-[20px] hover:text-primary text-white duration-300 transition-all flex justify-center items-center rounded-full"/></li>
            <li ><FaPinterest className="text-[20px] hover:text-primary text-white duration-300 transition-all flex justify-center items-center rounded-full"/></li>
            <li ><AiFillTwitterCircle className="text-[20px] hover:text-primary text-white duration-300 transition-all flex justify-center items-center rounded-full"/></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
