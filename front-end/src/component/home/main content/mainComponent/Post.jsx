import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import PostModel from "./PostModel";

const Post = () => {
  const [showpost, setShowpost] = useState(false);

  return (
    <div className="w-[90%] mx-auto my-3 p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center gap-2">
        <div className="flex h-[40px] w-[40px] rounded-full bg-gray-200 items-center justify-center">
          <BiUser size={25} />
        </div>

        <PostModel />
      </div>
      <hr className="border-0 bg-gray-200 h-[1px]  my-3" />
      <div className="grid md:grid-cols-3 grid-cols-2  gap-2 px-2">
        {/* Live Video */}
        <div className="flex items-center justify-center gap-2 hover:bg-gray-100 rounded-md py-2 cursor-pointer w-full">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
            alt=""
            className="w-6 h-6"
          />
          <p className="text-sm font-medium whitespace-nowrap">Live Video</p>
        </div>

        {/* Photos/Videos */}
        <div className="flex items-center justify-center gap-2 hover:bg-gray-100 rounded-md py-2 cursor-pointer w-full">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
            alt=""
            className="w-6 h-6"
          />
          <p className="text-sm font-medium">Photos/Videos</p>
        </div>

        {/* Feeling/Activity */}
        <div className="flex items-center justify-center hidden md:block gap-2 hover:bg-gray-100 rounded-md py-2 cursor-pointer w-full">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
            alt=""
            className="w-6 h-6"
          />
          <p className="text-sm font-medium">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
