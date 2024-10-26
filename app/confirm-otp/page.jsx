"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  return (
    <div className=" flex flex-col space-y-4 font-circular text-black justify-center">
      <div className="flex flex-col items-center self-center gap-4 mb-6 mt-20">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row gap-1 justify-around md:justify-between mx-2">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="tel"
                maxLength="1"
                size="1"
                // value={value}
                // onChange={(e) => handleInputChange(index, e.target.value)}
                // ref={(ref) => (inputRefs.current[index] = ref)}
                className="md:h-20 md:w-20 h-12 w-12 rounded-md border-[1px] border-otp-box font-light text-otp-box border-[#B6B6E5]"
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  padding: "10px",
                }}
              />
            ))}
          </div>
          <p className="max-w-[430px] text-[#696F79] text-center pb-10">
            Enter OTP code that was sent to your email, segunsolaru@gmail.com.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-20">
          <Link href="/reset-password">
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-[250px] lg:w-[400px]">
              Confirm OTP
            </button>
          </Link>
          <p className="text-[#696F79] self-center text-sm">
            {" "}
            Did&apos;t get a code?{" "}
            <Link href="/">
              <span className="text-[#603F8B]">Resend</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
