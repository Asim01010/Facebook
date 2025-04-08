import React from "react";
import { BiSearch } from "react-icons/bi";

const Menu = () => {
  return (
    <div className="bg-gray-50 rounded-md shadow-xl px-5 py-3 absolute -translate-x-full w-[30%] top-13">
      <div className="text-2xl font-bold py-2">Menu</div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 bg-white rounded-md py-3 flex flex-col justify-center items-center ">
          <div className="relative flex items-center p-2 rounded-full bg-gray-100 gap-1">
            <BiSearch className=" text-gray-500 " size={20} />
            <input
              type="text"
              className="border-0 outline-0 "
              placeholder="Search menu"
            />
          </div>
        </div>

        <div className="col-span-1 bg-green-500 p-3 "></div>
      </div>
    </div>
  );
};

export default Menu;
