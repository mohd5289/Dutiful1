import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgLineComponent from "./SvgLineComponent";
import SocialIcons from "./SocialIcons";
import StoreIcons from "./StoreIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-6 bg-dutiful-color min-h-383 font-circular">
      <div className=" text-white flex flex-wrap justify-evenly items-start mx-4">
        <div className="flex flex-col space-y-2 mt-16 min-w-[20%]">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <h4 className="text-base text-[#B6B6E5] font-light">About Us</h4>
          <h4 className="text-base  text-[#B6B6E5] font-light">Contact us</h4>
          <h4 className="text-base text-[#B6B6E5] font-light">FAQs</h4>
        </div>
        <div className="flex flex-col space-y-2 mt-16 min-w-[20%]">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <h4 className="text-base text-[#B6B6E5] font-light">Find Services</h4>
          <h4 className="text-base text-[#B6B6E5] font-light">
            Pricing & plans
          </h4>
          <h4 className="text-base text-[#B6B6E5] font-light">
            List your business
          </h4>
        </div>
        <div className="flex flex-col space-y-2 mt-16 min-w-[20%]">
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <h4 className="text-base text-[#B6B6E5] font-light">Blog</h4>
          <h4 className="text-base text-[#B6B6E5] font-light">
            Affiliate program
          </h4>
        </div>
        <div className="flex flex-col space-y-2 mt-16 min-w-[20%]">
          <h2 className="text-lg font-bold mb-4">More from Dutiful</h2>
          <h4 className="text-base text-[#B6B6E5] font-light">Dutiful jobs</h4>
        </div>
      </div>
      <div className="text-white flex flex-col gap-4 items-center justify-evenly pb-4">
        {" "}
        <hr className="border w-3/4 border-[#63428E]" />
        <div className="flex  flex-wrap justify-between w-3/4 px-2 mx-2">
          <div className="flex gap-10">
            <h2 className="text-lg font-semibold ">Follow us</h2>
            <SocialIcons />
          </div>
          <div className="flex gap-10">
            <h2 className="text-lg font-semibold pt-1">Download the app</h2>
            <StoreIcons />
          </div>
        </div>
        <hr className="border w-3/4 border-[#63428E]" />
      </div>
      <div className="flex flex-wrap justify-center pb-4 ">
        <div className="w-3/4 flex space-x-8 ">
          <h2 className="text-[#B6B6E5] font-light">© 2022 Dutiful®</h2>
          <div className="flex gap-3">
            <h4 className=" text-[#B6B6E5] ">Terms of service</h4>
            <h4 className=" text-[#B6B6E5] ">Privacy policy </h4>
            <h4 className=" text-[#B6B6E5] ">Disclaimer</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
