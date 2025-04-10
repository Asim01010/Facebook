import React from "react";
import { FaUser } from "react-icons/fa";
import { sidebar_data } from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div className="min-h-screen p-5 bg-gray-300">
      <div className="flex gap-2">
        <div className="flex items-center gap-3">
          <div className="w-[35px] h-[35px] bg-gray-200 border-gray-300 rounded-full flex items-center justify-center">
            <FaUser size={22} className="text-gray-600" />
          </div>
          <h2 className="font-semibold">Muhammad Asim</h2>
        </div>
      </div>
      <ul className="flex flex-col">
        {sidebar_data?.map((item, index) => {
          return (
            <div key={index}>
              <li className="">{item.icons}</li>
              <h2>{item.heading}</h2>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
