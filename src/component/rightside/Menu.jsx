import React from "react";
import { BiSearch } from "react-icons/bi";
import { Social_data } from "./Social_data/Social_data";

const Menu = () => {
  return (
    <div className="bg-gray-50 rounded-md shadow-xl px-5 py-3 absolute -translate-x-full w-[40%] top-13 ">
      <div className="text-2xl font-bold py-2">Menu</div>
      <div className="grid md:grid-cols-3 gap-2 grid-cols-1">
        <div className="col-span-2 bg-white rounded-md p-3 flex flex-col justify-center items-center ">
          <div className="relative flex items-center p-2 rounded-full bg-gray-100 gap-1 w-full ">
            <BiSearch className=" text-gray-500 " size={20} />
            <input
              type="text"
              className="border-0 outline-0 "
              placeholder="Search menu"
            />
          </div>

          <ul className="flex flex-col unstyled my-5 gap-3 list-none w-full">
            {Social_data?.map((item, index) => {
              return (
                <div key={index}>
                  <li className="text-md font-semibold capitalize text-gray-800">
                    {item.title}
                  </li>
                  {/* nested list */}
                  {item?.list?.map((item2, index2) => {
                    return (
                      <div key={index2} className="flex gap-2 p-2 items-center">
                        <img src={item2?.icons} width={30} alt="" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </div>

        <div className="col-span-1 bg-green-500 p-3 "></div>
      </div>
    </div>
  );
};

export default Menu;
