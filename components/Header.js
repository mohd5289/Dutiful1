"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <header>
      <nav className="w-full flex justify-between items-center p-4 pl-6 xl:pl-12  lg:pl-6 md:pl-4 sm:pl-2">
        {/* Logo */}
        <div className=" flex space-x-1">
          <Image src="/dutiful.svg" alt="bilsIcon" width={120} height={55} />
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-bils-color">
              {/* <img src="/path/to/logo.svg" alt="Logo" className="h-8" /> */}
            </a>
          </Link>
        </div>
        <div className="flex gap-6 justify-around w-2/3 items-center px-5">
          <div className=" flex  gap-5 justify-between items-center font-circular text-menu-color ">
            {/* Navigation Links */}
            <div
              className={`hidden md:flex gap-[15px]  ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <Link href="/" legacyBehavior>
                <a
                  className={`hover:text-gray-300 ${
                    activeTab === "home" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("home")}
                >
                  Business Directory
                </a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a
                  className={`hover:text-gray-300 ${
                    activeTab === "pricing" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("pricing")}
                >
                  Features
                </a>
              </Link>
              <Link href="/AboutUs" legacyBehavior>
                <a
                  className={`hover:text-gray-300 ${
                    activeTab === "aboutus" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("aboutus")}
                >
                  Pricing
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a
                  className={`hover:text-gray-300 ${
                    activeTab === "contact" ? "font-bold" : ""
                  }`}
                  onClick={() => handleTabClick("contact")}
                >
                  Blog
                </a>
              </Link>
            </div>
          </div>
          <div className="flex gap-2 font-circular ">
            <button className="bg-transparent text-[#1E1E4B] hover:text-blue-700 font-semibold py-1 px:1 md:py-2 md:px-4 min-w-16 text-sm lg:text-base">
              Login
            </button>
            <button className="bg-transparent text-[#603F8B] border-2 border-[#603F8B] border-solid hover:bg-[#603F8B] hover:text-white font-semibold py-1 px:1 md:py-2 md:px-4 rounded-md min-w-16 text-sm lg:text-base">
              Sign Up
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden ">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} `}>
        <Link href="/" legacyBehavior>
          <a
            className={`block px-4 py-2 hover:bg-blue-500 ${
              activeTab === "home" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("home")}
          >
            Business Directory
          </a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a
            className={`block px-4 py-2 hover:bg-blue-500 ${
              activeTab === "pricing" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("pricing")}
          >
            Features
          </a>
        </Link>
        <Link href="/AboutUs" legacyBehavior>
          <a
            className={`block px-4 py-2 hover:bg-blue-500 ${
              activeTab === "aboutus" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("aboutus")}
          >
            Pricing
          </a>
        </Link>

        <Link href="/contact" legacyBehavior>
          <a
            className={`block px-4 py-2 hover:bg-blue-500 ${
              activeTab === "contact" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("contact")}
          >
            Blog
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
