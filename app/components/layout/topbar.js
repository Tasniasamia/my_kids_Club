"use client";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="bg-cyan bg-opacity-50 py-3 border-b border-white">
        <div className="container mx-auto">
      <div className=" w-full flex  justify-between items-center md:gap-0 gap-[10px] sm:flex-row flex-col">
        <ul className="list-none flex lg:gap-[40px] sm:gap-[10px]  gap-[20px] items-center">
          <li className="flex items-center ">
            <MdOutlineEmail  className="text-white me-[4.57px] sm:text-[15.71px] text-[12px]" />
            <span className="text-toptext text-xs font-bold sm:me-[5px] sm:block hidden">
              Email Us:
            </span>
            <span className="text-toptext2 text-sm  font-medium text-opacity-70">
              info@kidstick.com.bd
            </span>
          </li>
          <li className="flex items-center ">
            <FaPhoneAlt  className="text-white me-[4.57px] sm:text-[15.71px] text-[12px]" />
            <span className="text-toptext text-xs font-bold me-[5px] sm:block hidden">
              Call Us:
            </span>
            <span className="text-toptext2 text-sm  font-medium text-opacity-70">
              +8801404049797
            </span>
          </li>
        </ul>
        <div className="flex lg:gap-[26px] sm:gap-[10px] gap-[20px] items-center">
          <p className="text-toptext3 text-opacity-70 sm:text-sm text-xs">
            Visit us on social networks
          </p>
          <ul className="list-none flex  items-center gap-[6px] ">
            <li className="h-[24px] w-[24px] bg-socialcolor1 flex items-center justify-center rounded-full">
              <a href="https://www.facebook.com/kidslandweb">
                <FaFacebookF  className="text-white sm:text-base text-xs" />
              </a>
            </li>
            <li className="h-[24px] w-[24px] bg-socialcolor2 flex items-center justify-center rounded-full">
              <a href="https://www.facebook.com/kidslandweb">
                <FaInstagram  className="text-white sm:text-base text-xs" />
              </a>
            </li>
            <li className="h-[24px] w-[24px] bg-socialcolor3 flex items-center justify-center rounded-full">
              <a href="https://www.facebook.com/kidslandweb">
                <FaTwitter  className="text-white sm:text-base text-xs" />
              </a>
            </li>
            <li className="h-[24px] w-[24px] bg-primary flex items-center justify-center rounded-full">
              <a href="https://www.facebook.com/kidslandweb">
                <FaLinkedinIn  className="text-white sm:text-base text-xs" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Topbar;
