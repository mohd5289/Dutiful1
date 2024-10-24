import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col  ">
      <Image
        src="/banner.svg"
        width={1440}
        height={268}
        className="w-full pb-2"
      />
      <div className="flex justify-around bottom-0 left-0 w-full h-[300px]  -mt-[60px] ">
        {/* Content of the overlapping div */}
        <div className=" flex flex-col items-center justify-evenly bg-white rounded-md w-[450px] h-[200px] border border-[#EEEEFF]">
          <div className=" flex justify-center items-center gap-2 w-full ">
            <Image src="/sms_tracking.svg" width={48} height={48} />
            <h2 className="text-2xl font-recoleta font-bold text-[#1E1E4B]">
              Customer support
            </h2>
          </div>

          <p className="text-[#656565]">Please fill out the form below</p>
        </div>
        <div className=" flex flex-col items-center justify-evenly bg-white rounded-md w-[450px] h-[200px] border border-[#EEEEFF]">
          <div className=" flex justify-center items-center gap-2 w-full text-center">
            <Image src="/business.svg" width={48} height={48} />
            <h2 className="text-2xl font-recoleta font-bold text-[#1E1E4B]">
              Business address
            </h2>
          </div>

          <p className="text-[#656565] max-w-[75%]">
            Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001,
            Lagos, Nigeria
          </p>
        </div>
        <div className=" flex flex-col items-center justify-evenly bg-white rounded-md w-[450px] h-[200px] border border-[#EEEEFF]">
          <div className=" flex justify-center items-center gap-2 w-full ">
            <Image src="/call.svg" width={48} height={48} />
            <h2 className="text-2xl font-recoleta font-bold text-[#1E1E4B]">
              Phone number
            </h2>
          </div>

          <p className="text-[#656565]">+234 903 921 6724</p>
        </div>
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
            Business type (Optional)
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
            Subject
          </label>
          <div className="relative ">
            {" "}
            <input
              type="text"
              id="password"
              className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
            />
            <Image
              src="/arrow_down.svg" // Replace with your image path
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
            Write your message
          </label>

          <textarea
            type="text"
            id="message"
            className="border-2 border-[#E7EAF1] bg-[#F8FAFD] rounded-md py-4 px-4 w-[400px] "
          />
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md min-w-[400px]">
            Send Message
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
};

export default Page;
