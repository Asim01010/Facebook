import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="p-2 shadow-xl rounded-md bg-white">
        <input
          type="text"
          className="w-full rounded-md border border-gray-400 outline-none focus:border-blue-500 p-3 "
          placeholder="Email address or phone number"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-gray-400 outline-none focus:border-blue-500 p-3 "
        />
      </form>
    </>
  );
};

export default LoginForm;
