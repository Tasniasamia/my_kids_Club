"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaPinterest,FaFacebook,FaLinkedinIn  } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RxHome } from "react-icons/rx";

const Footer = () => {
  const emailref=useRef(null);
  
  return (
    <div className="bg-[url(/footer_bg.png)] bg-cover bg-no-repeat h-full relative">
      <Image src="/footer_svg.png" height={82} width={82} className="2xl:block hidden absolute h-[82px] w-[82px] left-[125px] bottom-[210px] object-cover "/>
      <div className="container gap-[40px] lg:flex-nowrap flex-wrap flex justify-between items-center   md:pt-[182px] md:pb-[43px] pt-[80px]    pb-[80px]">
         <div>
          <Image
            src="/logo.png"
            height={136.69}
            width={70}
            className="md:w-[136.69px] md:h-[70px] md:mt-0 mt-[50px]  w-[100px] h-[40px] object-cover"
          />
          <p className="text-[18px] font-semibold leading-[26px] text-footertext sm:w-[342px] w-[300px] md:mt-[36px] mt-[18px] mb-[20px]">
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
        <ul className="flex flex-col gap-[16px]">
          <li className="footer_text text-footertext">Home</li>
          <li className="footer_text text-footertext">About</li>
          <li className="footer_text text-footertext">Pricing</li>
          <li className="footer_text text-footertext">Event</li>
          <li className="footer_text text-footertext">Shop</li>
          <li className="footer_text text-footertext">Teacher</li>
         </ul>
         <ul className="flex flex-col gap-[16px]">
          <li className="footer_text text-footertext">Contact Us</li>
          <li className="footer_text text-footertext">Faq</li>
          <li className="footer_text text-footertext">Privacy Policy</li>
          <li className="footer_text text-footertext">Blog</li>
          <li className="footer_text text-footertext">Terms and Conditions</li>
          <li className="footer_text text-footertext">Teacher</li>
         </ul>
         <div  className="flex flex-col gap-[16px] w-[317px]">
          <div className="flex gap-2">
            <RxHome className="text-[30px] font-bold text-primary "/>
            <p className="footer_text text-footertext">50 Outer Bypass Road, Sonadanga , Khulna 9001. Bangladesh</p>
          </div>
          <div className="flex gap-2 items-center">
            <FiPhoneCall className="text-[20px] text-primary "/>
            <p className="footer_text text-footertext">+8801403567345</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineEmail className="text-[20px] text-primary "/>
            <p className="footer_text text-footertext">info@kidstick.com.bd</p>
          </div>
          <Image src="/payment_method.png" width={292} height={27} className="md:w-[292px] mt-[14px] h-[27px] w-full object-cover "/>
         </div>
      </div>
      <div className="flex justify-center items-center sm:max-w-[400px] max-w-[250px] mx-auto ">
       
        <input ref={emailref} placeholder="Your Email" name="email"onMouseEnter={(e)=>{console.log(emailref.current.value)}} className="bg-transparent border-b outline-none border-0 w-[100%] h-[40px] pl-[10px]  text-white " type="email" required={true}/>
      </div>
      <p className="py-[28px] bg-footerbg text-center text-footertext mt-[54px]">
      2024-2025 All right received by &copy; <span className="text-primary">KidStick</span>
      </p>
    </div>
  );
};

export default Footer;
