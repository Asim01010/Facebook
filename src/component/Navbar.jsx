import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaGamepad, FaUser, FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { SiBitbucket } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className="flex  items-center justify-between bg-gray-800 p-2">
        <div className="flex nav-left items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="LOGO"
            width={45}
          />
          <div>
            <input
              type="text"
              className="border  bg-gray-600 mx-2 py-2 rounded-full outline-0"
            />
          </div>
        </div>
        <div className="flex nav-main items-center text-white justify-between gap-10">
          <GoHomeFill size={25} />
          <FaUserFriends size={25} />
          <TbBrandYoutubeFilled size={25} />
          <SiBitbucket size={25} />
          <FaGamepad size={25} />
        </div>
        <div className="flex gap-2 nav-right items-center text-white">
          <div className="bg-[#4F5152] hover:bg-stone-500 p-1 rounded-full ">
            <CgMenuGridR size={25} className="z-2" />
          </div>
          <div className="bg-[#4F5152] p-1 rounded-full hover:bg-stone-500 ">
            <RiMessengerFill size={25} className="z-2" />
          </div>
          <div className="bg-[#4F5152] p-1 rounded-full hover:bg-stone-500">
            <IoNotifications size={25} className="z-2" />
          </div>
          <div className="bg-[#ced1d2] text-stone-700 p-1 rounded-full hover:bg-stone-200 ">
            <FaUser size={25} className="z-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
