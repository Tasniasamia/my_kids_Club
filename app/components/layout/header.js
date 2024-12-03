"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Badge, Dropdown, Space } from "antd";
import { FaRegUser, FaRegHeart, FaSearch, FaBars } from "react-icons/fa";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <div className="bg-cyan py-[10px] bg-opacity-50">
      <div className="container ">
        <div className="flex justify-between items-center ">
          <Image
            src="/logo.png"
            width={136.69}
            height={70}
            alt="logo"
            className="md:h-[70px] md:w-[136.69px] w-[100px] h-[40px] object-cover cursor-pointer"
            href="/"
          />
          <div className="flex items-center xl:gap-[65.06px] gap-[20px]">
            <ul className="list-none lg:flex hidden xl:gap-[40px] gap-[20px] items-center">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } text-[18px] hover:text-primary duration-300 transition-all text-textprimary font-semibold leading-[26px] cursoer-pointer  capitalize`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer capitalize`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer  capitalize`}
                >
                  Service
                </Link>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-primary duration-300 transition-all   text-textprimary  cursoer-pointer flex gap-1 items-center capitalize"
                  >
                    <span className="font-semibold leading-[26px] text-[18px] ">
                      Pages +
                    </span>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer capitalize`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer  capitalize`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer  capitalize`}
                >
                  contact
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`${
                    pathname === '/"' ? "text-primary" : "text-textprimary"
                  } hover:text-primary duration-300 transition-all  text-[18px] text-textprimary font-semibold leading-[26px] cursoer-pointer capitalize`}
                >
                  cart(0)
                </Link>
              </li>
            </ul>
            <ul className="list-none flex gap-[10px] items-center">
              <li className="bg-textprimary sm:w-[35px] sm:h-[35px] w-[28px] h-[28px] rounded-full text white flex justify-center items-center text-white font-bold">
                <FaSearch size={14.16} />
              </li>
              <li className="bg-textprimary sm:w-[35px] sm:h-[35px] w-[28px] h-[28px] rounded-full text white flex justify-center items-center text-white font-bold">
                <FaRegHeart size={14.16} />
              </li>

              <Badge count={0} showZero>
                <li className="bg-textprimary sm:w-[35px] sm:h-[35px] w-[28px] h-[28px] rounded-full text white flex justify-center items-center text-white font-bold">
                  <BiShoppingBag size={14.16} />
                </li>
              </Badge>

              <li className="bg-textprimary sm:w-[35px] sm:h-[35px] w-[28px] h-[28px] rounded-full text white flex justify-center items-center text-white font-bold text-[14.16px]">
                <FaRegUser />
              </li>
              <li
                className="bg-textprimary sm:w-[35px] sm:h-[35px] w-[28px] h-[28px] rounded-full lg:hidden  flex justify-center items-center text-white font-bold text-[14.16px] "
                onClick={handleToggle}
              >
                {toggle ? <IoClose /> : <FaBars />}
              </li>
            </ul>
          </div>
          {toggle && (
            <div className="absolute top-[130px] left-0 w-full bg-cyan z-50">
              <ul className="list-none flex flex-col gap-[10px] items-center p-4">
                <li>
                  <Link
                    href="/"
                    className={`${
                      pathname === "/" ? "text-primary" : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about"
                        ? "text-primary"
                        : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className={`${
                      pathname === "/service"
                        ? "text-primary"
                        : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    Service
                  </Link>
                </li>
                <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-primary duration-300 transition-all   text-textprimary  cursoer-pointer flex gap-1 items-center capitalize"
                  >
                    <span className="font-semibold leading-[26px] text-[18px] ">
                      Pages +
                    </span>
                  </a>
                </Dropdown>
              </li>
                <li>
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" ? "text-primary" : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className={`${
                      pathname === "/pricing"
                        ? "text-primary"
                        : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${
                      pathname === "/contact"
                        ? "text-primary"
                        : "text-textprimary"
                    } hover:text-primary duration-300 transition-all text-[18px] font-semibold capitalize`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
