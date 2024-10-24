"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("regular");

  // Function to handle button click
  const handleButtonClick = (buttonType) => {
    setSelected(buttonType);
  };
  return (
    <div className=" flex flex-col space-y-4 font-circular text-black justify-center">
      <div className="flex flex-col space-y-2 text-center ">
        <p className="text-sm text-menu-color">Sign up for free!</p>
        <h2 className="text-3xl font-recoleta font-bold">Get started</h2>
      </div>
      <div className="flex gap-5 justify-center w-full">
        <button
          className={`flex gap-2 bg-transparent text-[#603F8B] border-2 border-[#603F8B] border-solid  font-semibold py-4 px-4 rounded-md min-w-32 relative ${
            selected === "service"
              ? "border-menu-color text-menu-color"
              : "text-[#603F8B] border-[#603F8B]"
          }`}
          onClick={() => handleButtonClick("regular")}
        >
          {selected === "regular" && (
            <Image
              src="/checkmark.svg"
              alt="checkmark"
              width={38}
              height={38}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
          )}
          <Image
            src={selected === "service" ? "/gray_profile.svg" : "/profile.svg"}
            alt="profile"
            width={24}
            height={25}
          />
          Regular user
        </button>
        <button
          className={`flex gap-2 bg-transparent  border-2  border-solid  font-semibold py-4 px-4 rounded-md min-w-32 relative ${
            selected === "service"
              ? "text-[#603F8B] border-[#603F8B]"
              : "border-menu-color text-menu-color"
          }`}
          onClick={() => handleButtonClick("service")}
        >
          {selected === "service" && (
            <Image
              src="/checkmark.svg"
              alt="checkmark"
              width={38}
              height={38}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
          )}
          <Image
            src={selected === "service" ? "/purple_home.svg" : "/home.svg"}
            width={24}
            height={24}
          />
          Service Provider
        </button>
      </div>
      <div className="flex flex-col items-center self-center gap-4 mb-6">
        <div className="flex flex-col ">
          <label
            htmlFor="fullName"
            className="text-sm text-[#603F8B] self-start"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm text-[#603F8B] self-start">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
          />
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="phoneNumber"
            className="text-sm text-[#603F8B] self-start"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
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
              className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
            />
            <Image
              src="/show.svg" // Replace with your image path
              alt="icon"
              width={20} // Adjust width as needed
              height={16} // Adjust height as needed
              className="absolute right-5 top-1/2 transform -translate-y-1/2" // Position the image
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-[#603F8B] self-start"
          >
            Re-enter password
          </label>
          <div className="relative">
            <input
              type="text"
              id="confirmPassword"
              className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
            />
            <Image
              src="/show.svg" // Replace with your image path
              alt="icon"
              width={20} // Adjust width as needed
              height={16} // Adjust height as needed
              className="absolute right-5 top-1/2 transform -translate-y-1/2" // Position the image
            />
          </div>
          <div className="flex gap-[0.88rem] ">
            <input
              type="checkbox"
              name=""
              id=""
              className=" border-[#603F8B] border-4"
            />
            <span className="text-[#696F79] font-medium text-sm">
              I agree to Dutiful&apos;s{" "}
              <span className="underline text-[#603F8B]">
                terms and conditions
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md min-w-[400px]">
            Sign Up
          </button>
          <p className="text-[#696F79] self-center text-sm">
            {" "}
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#603F8B]">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
