import React from "react";
import { FaPlus } from "react-icons/fa";
import LoginForm from "../component/auth/LoginForm";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 m-10">
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col ">
            <img
              src="https://www.cdnlogo.com/logos/f/10/facebook.svg"
              alt="fb Logo"
              width={200}
            />
            <h2 className="text-4xl mt-5">Recent logins</h2>
            <h3>Click your picture or add an account.</h3>
            <div className="card border-2  max-w-fit border-gray-200 my-5 rounded-xl flex justify-center items-center flex-col">
              <div className="p-4 my-10 bg-blue-500 rounded-full">
                <FaPlus color="white" />
              </div>
              <h3 className="text-2xl text-blue-500 bg-white py-2 w-full text-center px-10 flex justify-center items-center rounded-xl ">
                Add Account
              </h3>
            </div>
          </div>

          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
