import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className=" flex flex-col space-y-2 justify-center items-center w-full h-[268px] font-recoleta mx-2 ">
        <h2 className="text-4xl font-bold  text-[#1E1E4B]">
          Plans to Suit Your Business Budget
        </h2>
        <p className="max-w-[43%] text-[#656565] text-center ">
          Our fully organized plans deliver valuable content that showcases your
          services and skills, drives Lead, covers all features, and gives
          customers a clear idea to be able to choose your services.
        </p>
      </div>
      <div className="flex flex-col bg-[#FCFAFF]">
        <div className="flex flex-wrap justify-around bg-[#FCFAFF] p-6">
          <div className="flex flex-col gap-2 rounded-md min-h-[800px] w-[450px] bg-white py-8 px-4">
            <p className="font-circular">Basic</p>
            <h2 className="text-4xl font-bold font-recoleta">Free</h2>
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
              Get started
            </button>

            <div className="flex flex-col gap-2 pt-6 font-recoleta">
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Access to dashboard</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 products/services</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 Images</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Unlimited keywords</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display service hours and prices
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display address, contact and email
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant chat</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Reviews and ratings</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Profile visibility</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant notifications</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display website and social network
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Quotes</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Bookmarks</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md min-h-[800px] w-[450px] bg-white py-8 px-4">
            <p className="font-circular">Standard</p>
            <div className="flex">
              <p className=" flex font-bold items-start">NGN</p>{" "}
              <h2 className="text-4xl font-bold font-recoleta">20,000</h2>{" "}
              <p className="flex font-bold items-end">/year</p>{" "}
            </div>
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
              Get started
            </button>
            <div className="flex flex-col gap-2 pt-6 font-recoleta">
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Access to dashboard</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 products/services</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 Images</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Unlimited keywords</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display service hours and prices
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display address, contact and email
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant chat</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Reviews and ratings</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Profile visibility</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant notifications</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display website and social network
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Quotes</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Bookmarks</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Number of profile views</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Verified badge (purple)</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Accept & Sell appointment</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Latest offers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md min-h-[800px] w-[450px] bg-white py-8 px-4">
            <p className="font-circular">Premium</p>
            <div className="flex">
              <p className=" flex font-bold items-start">NGN</p>{" "}
              <h2 className="text-4xl font-bold font-recoleta">30,000</h2>{" "}
              <p className="flex font-bold items-end">/year</p>{" "}
            </div>
            <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
              Get started
            </button>
            <div className="flex flex-col gap-2 pt-6 font-recoleta">
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Access to dashboard</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 products/services</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Add up to 2 Images</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Unlimited keywords</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display service hours and prices
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display address, contact and email
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant chat</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Reviews and ratings</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Profile visibility</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Instant notifications</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">
                  Display website and social network
                </p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Quotes</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Bookmarks</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Number of profile views</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Verified badge (purple)</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Accept & Sell appointment</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">Latest offers</p>
              </div>
              <div className="flex  gap-2">
                <Image src="/check.svg" width={24} height={24} />
                <p className="text-[#656565]">24/7 service and support</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mx-12">Features Overview</h2>
        <div className=" flex flex-col space-y-2 mb-20">
          <div className="flex flex-wrap justify-between px-12 font-circular overflow-x-auto">
            <div className="flex items-end text-xl">Features & Services</div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Basic</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Standard</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Premium</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
          </div>
        </div>
        <table className="w-full border-collapse font-circular mx-2 mb-10 overflow-hidden">
          <tbody>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Access to dashboard
              </td>
              <td className="p-4 pl-24 w-1/4 text-[#656565]">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                {" "}
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                {" "}
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                No. of business listings
              </td>
              <td className="p-4 pl-24 w-1/4">2 businesses</td>
              <td className="pl-36 p-4 w-1/4">6 businesses</td>
              <td className="pl-48 p-4 w-1/4 ">10 businesses</td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">RNo. of Images</td>
              <td className="p-4 pl-24 w-1/4"> 2</td>
              <td className="pl-36 p-4 w-1/4">6</td>
              <td className="pl-48 p-4 w-1/4 ">10</td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Keywords</td>
              <td className="p-4 pl-24 w-1/4">2</td>
              <td className="pl-36 p-4 w-1/4">4</td>
              <td className="pl-48 p-4 w-1/4 ">6</td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Display service hours & prices
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Display address, email & contact
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Instant chat</td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Reviews & ratings
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Profile visibility
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Instant notifications
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Display website & social network
              </td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Quotes</td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Bookmarks</td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Profile views</td>
              <td className="p-4 pl-24 w-1/4">
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Verified badge</td>
              <td className="p-4 pl-24 w-1/4">
                {" "}
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-36 p-4 w-1/4">Purple </td>
              <td className="pl-48 p-4 w-1/4 ">Gold</td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">Latest offers</td>
              <td className="p-4 pl-24 w-1/4">
                {" "}
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-white ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">
                Accept & sell appointment
              </td>
              <td className="p-4 pl-24 w-1/4">
                {" "}
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
            <tr className="flex  bg-[#FCFAFF] ">
              <td className="p-4 pl-20 w-1/4 text-[#656565]">24/7 support</td>
              <td className="p-4 pl-24 w-1/4">
                {" "}
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-36 p-4 w-1/4">
                <Image src="/cross.svg" width={24} height={24} />
              </td>
              <td className="pl-48 p-4 w-1/4 ">
                {" "}
                <Image src="/table_tick.svg" width={32} height={32} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
