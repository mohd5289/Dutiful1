import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex gap-4 justify-around p-4 px-12">
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <h2 className="font-recoleta text-4xl font-bold max-w-[510px]">
            List and grow your business with just few clicks
          </h2>
          <p className="max-w-[510px]">
            Eliminate manual work and save time by listing your business or
            service on the best business directory in Nigeria.
          </p>
        </div>
        <Image src="/business_overview.svg" width={674} height={602} />
      </div>
      <div className="flex gap-4 justify-around p-4 px-12">
        <Image src="/rating_reviews.svg" width={592} height={579} />
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <h2 className="font-recoleta text-4xl font-bold max-w-[500px]">
            Collect reviews and ratings from customers
          </h2>
          <p className="max-w-[510px]">
            Accelerate your business reputation by 90% and gain social
            proof through reviews and ratings requested from customers.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image src="./quotes.svg" width={1312} height={856} />
      </div>
      <div className="flex gap-4 justify-around p-4 px-12">
        <Image src="/calendar.svg" width={521} height={477} />
        <div className="flex flex-col space-y-2 items-center justify-start ">
          <h2 className="font-recoleta text-4xl font-bold max-w-[500px] pt-12">
            Collect reviews and ratings from customers
          </h2>
          <p className="max-w-[510px]">
            Accelerate your business reputation by 90% and gain social
            proof through reviews and ratings requested from customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
