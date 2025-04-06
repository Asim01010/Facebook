import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaGamepad, FaUser, FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { SiBitbucket } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Slider from "@mui/material/Slider";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { navbar_data } from "./data/NavbarData";

const Navbar = () => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center  p-2  ">
        {/* left */}
        <div
          className={`flex items-center gap-1 transition-all duration-100 ${
            focused && "shadow-2xl shadow-gray-400  rounded-md  pb-2 "
          }  `}
        >
          <div className="flex items-center justify-center h-[40px] w-[40px] hover:bg-gray-200 rounded-full">
            <IoMdArrowBack
              size={20}
              className={`text-gray-500 transition-all duration-300  ${
                focused
                  ? "opacity-100 -translate-x-0"
                  : "opacity-0 translate-x-15"
              }`}
            />
          </div>
          <img
            src="/images/Facebook-Logosu.png"
            width={40}
            alt=""
            className={`transition-all duration-300  ${focused && "hidden"}`}
          />
          <div
            className={`bg-gray-200 rounded-full flex items-center px-3 gap-1 `}
          >
            <CiSearch
              size={20}
              className={`transition-all duration-300  ${focused && "hidden"} `}
            />
            <input
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              type="text"
              className={`border-0 outline-0 py-2 ${focused && "px-5"}`}
              placeholder="Search Facebook"
            />
          </div>
        </div>
        {/* mid */}

        <ul className="flex">
          {navbar_data?.map((item, index) => {
            return (
              <>
                <li key={index}>{item.icon}</li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
