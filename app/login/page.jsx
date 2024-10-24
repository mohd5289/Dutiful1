import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col space-y-4 font-circular text-black justify-center">
      <div className="flex flex-col space-y-2 text-start w-[400px] self-center">
        <p className="text-sm text-menu-color">Jump right back in</p>
        <h2 className="text-3xl font-recoleta font-bold">Login</h2>
      </div>

      <div className="flex flex-col items-center self-center gap-4 mb-6">
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm text-[#603F8B] self-start">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[250px] lg:w-[400px] "
          />
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="password"
            className="text-sm text-[#603F8B] self-start"
          >
            Password
          </label>
          <div className="relative ">
            {" "}
            <input
              type="text"
              id="password"
              className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[250px] lg:w-[400px] "
            />
            <Image
              src="/show.svg" // Replace with your image path
              alt="icon"
              width={20} // Adjust width as needed
              height={16} // Adjust height as needed
              className="absolute right-5 top-1/2 transform -translate-y-1/2" // Position the image
            />
          </div>
          <Link href="/forgot-password" className="self-end">
            <p className="text-sm text-[#603F8B] font-light">
              Forgot password?
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-[250px] lg:w-[400px]">
            Sign Up
          </button>
          <p className="text-[#696F79] self-center text-xs md:text:sm">
            {" "}
            Don&apos;t have an account?{" "}
            <Link href="/">
              <span className="text-[#603F8B]">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
