import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col space-y-4 font-circular text-black justify-center">
      <div className="flex flex-col items-center self-center gap-4 mb-6">
        <div className="flex flex-col space-y-4">
          <Image
            src="/send_email.svg" // Replace with your image path
            alt="icon"
            width={139} // Adjust width as needed
            height={139}
            className="self-center"
          />
          <p className="max-w-[430px] text-[#696F79] text-center ">
            An OTP code has been sent to segunsolaru@gmail.com. Check your email
            to get the code
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <Link href="/confirm-otp">
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-[250px] lg:w-[400px]">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
