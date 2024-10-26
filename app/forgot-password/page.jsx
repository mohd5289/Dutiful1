import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col space-y-4 font-circular text-black justify-center">
      <div className="flex flex-col space-y-2 md:text-start text-center w-[400px] self-center">
        <h2 className="text-3xl font-recoleta font-bold">Forgot Password</h2>
        <p className="text-xs md:text-sm text-menu-color">
          Enter your email and well send you a mail on how to reset your
          password.
        </p>
      </div>

      <div className="flex flex-col items-center self-center gap-4 mb-6">
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm text-[#603F8B] self-start">
            Email
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[250px] lg:w-[400px] "
            />
            <Image
              src="/message.svg" // Replace with your image path
              alt="icon"
              width={20} // Adjust width as needed
              height={16} // Adjust height as needed
              className="absolute right-5 top-1/2 transform -translate-y-1/2" // Position the image
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <Link href="/send-email">
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-[250px] lg:w-[400px]">
              Send email
            </button>
          </Link>
          <p className="text-[#696F79] self-center text-sm">
            {" "}
            Or?{" "}
            <Link href="/login">
              <span className="text-[#603F8B]">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
