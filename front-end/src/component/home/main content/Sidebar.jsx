import React from "react";
import { FaAngleUp, FaChevronDown, FaUser } from "react-icons/fa";
import { sidebar_data } from "../data/SidebarData";
import { User } from "../../../../../back-end/models/userModel";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen p-3 bg-gray-100">
      <div className="flex gap-2 hover:bg-gray-200 p-2 rounded-md">
        <div className="flex items-center gap-3">
          <div className="w-[35px] h-[35px] bg-gray-300 border-gray-300 rounded-full flex items-center justify-center border-2 ">
            <FaUser size={22} className="text-gray-600" />
          </div>
          <h2 className="font-semibold capitalize">
            {user?.f_name} {user?.l_name}
          </h2>
        </div>
      </div>
      <ul className="flex flex-col ">
        {sidebar_data?.slice(0, 10)?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center p-2 gap-3 font-semibold hover:bg-gray-200 rounded-md"
              >
                <li className="">
                  <img src={item.icons} alt="" />
                </li>
                <h2>{item.heading}</h2>
              </div>
            </>
          );
        })}

        <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-300/50 rounded-full">
            <FaChevronDown />
          </div>
          <h5 className="font-semibold">See more</h5>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
