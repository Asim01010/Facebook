import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="p-5 rounded-md shadow-xl">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full outline-0 border border-gray-300 px-10 py-3 focus:outline outline-blue-400 rounded-md"
          />
          <input
            type="password"
            className="w-full outline-0 border border-gray-300 p-3 rounded-md focus:outline outline-blue-400"
          />
          <button className="w-full bg-blue-500 rounded-md text-white font-bold py-2 ">
            Log in
          </button>
          <a href="" className=" text-blue-700 text-center">
            Forgotten password?
          </a>
          <hr className="bg-gray-300 h-[1px] border-0" />
          <button className="w-[75%] bg-green-500 mx-auto block py-2 text-white  rounded-md font-bold">
            Create new account
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
