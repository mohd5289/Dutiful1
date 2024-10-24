import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className=" flex flex-col space-y-2 justify-center items-center w-full h-[268px] font-recoleta ">
        <h2 className="text-4xl font-bold  text-[#1E1E4B]">
          Plans to Suit Your Business Budget
        </h2>
        <p className="max-w-[43%] text-[#656565] text-center">
          Our fully organized plans deliver valuable content that showcases your
          services and skills, drives Lead, covers all features, and gives
          customers a clear idea to be able to choose your services.
        </p>
      </div>
      <div className="flex flex-col bg-[#FCFAFF]">
        <div className="flex justify-around bg-[#FCFAFF] p-6 ">
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
          <div className="flex justify-between px-12 font-circular">
            <div className="flex items-end text-xl">Features & Services</div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Basic</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Basic</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
            <div className="flex flex-col justify-between w-[250px] h-[100px]">
              <h2 className="text-lg font-bold">Basic</h2>
              <button className="bg-[#603F8B]  border-2 text-white border-solid  font-semibold py-4 px-4 rounded-md w-full">
                Get started
              </button>
            </div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="bg-white ">
              <td className=" p-4  ">Row 1, Cell 1</td>
              <td className="  p-4 ">Row 1, Cell 2</td>
              <td className="  p-4">Row 1, Cell 3</td>
              <td className="  p-4">Row 1, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 2, Cell 1</td>
              <td className="  p-4">Row 2, Cell 2</td>
              <td className="  p-4">Row 2, Cell 3</td>
              <td className="  p-4">Row 2, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
            <tr className="bg-white">
              <td className="  p-4 ">Row 3, Cell 1</td>
              <td className="  p-4">Row 3, Cell 2</td>
              <td className="  p-4">Row 3, Cell 3</td>
              <td className="  p-4">Row 3, Cell 4</td>
            </tr>
            <tr className="bg-[#FCFAFF]">
              <td className="  p-4 ">Row 4, Cell 1</td>
              <td className="  p-4">Row 4, Cell 2</td>
              <td className="  p-4">Row 4, Cell 3</td>
              <td className="  p-4">Row 4, Cell 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
