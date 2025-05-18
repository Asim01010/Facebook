import React, { useState } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { FaArrowLeftLong, FaRegFaceGrinTongueSquint } from "react-icons/fa6";
import { colors } from "@mui/material";
import { colorsData } from "./ColorsData";
import { useSelector } from "react-redux";
import { decorativeBG, gradientBG, solidBG } from "./decorative";

const PostData = () => {
  const [imgSelector, setImgSelector] = useState(false);
  const [caption, setCaption] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [selectedColor, setSelectedColor] = useState({
    startColor: "#fff",
    endColor: "#fff",
    image: "",
  });
  const { startColor, endColor } = selectedColor;

  const [changed, setChanged] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between  px-2 py-2">
        {/* Centered text using absolute positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-extrabold text-lg">
          Create post
        </div>

        {/* Close icon at the right */}
        <div className="ml-auto bg-gray-300 flex items-center justify-center h-[40px] w-[40px] rounded-full cursor-pointer">
          <GiCrossedSabres />
        </div>
      </div>
      <hr className="hr" />
      <div className="flex gap-2 px-2">
        <div className=" bg-gray-300 flex items-center justify-center border-gray-400 border-2 h-[40px] w-[40px] rounded-full cursor-pointer">
          <FaUser size={20} color="gray" />
        </div>
        <div className="flex-col">
          <p className="font-bold">User</p>
          <div className="flex items-center bg-gray-200 rounded-md px-1">
            <HiMiniUsers size={12} />
            <p className="font-bold text-[12px]">Friends</p>
            <IoMdArrowDropdown size={12} />
          </div>
        </div>
      </div>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        name="post_Text"
        id=""
        rows={changed ? 8 : 5}
        style={{
          background:
            startColor == ""
              ? `url(${selectedColor?.image})`
              : `linear-gradient(${startColor},${endColor})`,
          // backgroundSize: "center",
          backgroundPosition: "center",
        }}
        className={`w-[100%] h-[200px] outline-0 postHolder my-3 text-2xl   ${
          changed && "h-[350px] text-white placeholder-gray-400 font-extrabold "
        } text-black transition-all duration-150`}
        placeholder={`What's in your mind? ${user.l_name}`}
      ></textarea>
      <div className="flex items-center justify-between p-2">
        <div className="relative flex items-center gap-2">
          {/* Color Toggle Image */}
          <img
            onClick={() => setImgSelector(true)}
            src="https://web.facebook.com/images/composer/SATP_Aa_square-2x.png"
            alt=""
            width={32}
            className={`cursor-pointer ${imgSelector ? "hidden" : "block"}`}
          />

          {/* Back Arrow + Color Circles */}
          {imgSelector && (
            <div className="flex items-center gap-2">
              <div
                onClick={() => setImgSelector(false)}
                className="bg-gray-300 flex items-center justify-center h-[30px] w-[30px] rounded-md cursor-pointer"
              >
                <IoIosArrowBack />
              </div>

              {colorsData.map((item, index) => (
                <div
                  onClick={() => {
                    setSelectedColor(
                      index == 9
                        ? { startColor: "", endColor: "", image: item?.image }
                        : {
                            startColor: item?.startColor,
                            endColor: item?.endColor,
                          }
                    );
                    setChanged(index == 0 ? false : true);
                  }}
                  key={index}
                  className="h-[30px] w-[30px] rounded-md cursor-pointer"
                  style={{
                    background:
                      index !== 9
                        ? `linear-gradient(to right, ${item.startColor}, ${item.endColor})`
                        : `url(${item?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: index == 1 ? "black" : "white",
                  }}
                >
                  {" "}
                  {item.icon && item.icon}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <ul >

          {decorativeColor?.map((item, index) => {
            return <li key={index}>{}</li>;
          })}
        </ul> */}

        {/* Emoji Icon */}
        <FaRegFaceGrinTongueSquint
          size={25}
          color="gray"
          className="cursor-pointer"
        />
        <div className=" w-full h-[500px] overflow-hidden absolute top-[-50px] left-50 bg-white shadow-2xl rounded-xl ">
          <div className="flex items-center justify-center p-2">
            <div className=" flex items-center justify-center h-[40px] w-[40px] bg-gray-200 rounded-full">
              <FaArrowLeftLong color="gray" size={25} />
            </div>
            <p className="m-auto font-extrabold">Choose Background</p>
          </div>
          <hr className=" bg-gray-300 h-[1px] border-0" />
          <div className="relative h-full   overflow-y-scroll overscroll-y-auto ">
            <p className="font-bold mb-2">Decorative</p>
            <div className="w-full grid grid-cols-5 gap-1 ">
              {decorativeBG?.map((item, index) => (
                <div
                  key={index}
                  className="aspect-square p-1 rounded-2xl flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={`decorative-${index}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <p className="font-bold mb-2">Gradient</p>
            <div className="w-full grid grid-cols-5 gap-1 ">
              {gradientBG?.map((item, index) => (
                <div
                  key={index}
                  className="aspect-square p-1 rounded-2xl flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={`decorative-${index}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <p className="font-bold mb-2">Gradient</p>
            <div className="w-full grid grid-cols-5 gap-1">
              {solidBG?.map((item, index) => (
                <div
                  key={index}
                  className="aspect-square p-1 rounded-2xl flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-2xl"
                    style={{ backgroundColor: item.colored }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostData;
