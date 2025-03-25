import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [Dates] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const GenerateYears = () => {
    let years = [];
    for (let i = 2025; i >= 1905; i--) {
      years.push(i);
    }
    return years;
  };
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <img
          src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
          alt="facebook"
          width={220}
        />
      </div>
      <div className="shadow-xl rounded-md bg-white mx-auto xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[90%] h-[50%]">
        <h1 className="text-2xl font-bold text-center ">
          Create a new account
        </h1>
        <p className="text-[15px] text-gray-500 text-center my-1">
          It's quick and easy.
        </p>
        <hr className="border-0 bg-gray-200 h-[1px]" />
        <div className="grid grid-cols-2 ">
          <input
            type="text"
            className="rounded-md border border-gray-300 outline-0 px-2 py-2 m-3"
            placeholder="First name"
          />
          <input
            type="text"
            className="rounded-md border border-gray-300 outline-0 px-2 py-2 m-3"
            placeholder="Surname"
          />
        </div>
        <p className="text-[12px] text-gray-500   m-3 ">
          Date of birth <FaCircleQuestion className="inline" />
        </p>

        <div className="grid grid-cols-3 mx-3 gap-2">
          <select className="border border-gray-300 rounded-md  py-2 focus:border-blue-500 focus:border-2 ">
            {Array.from({ length: 30 }).map((_, index) => {
              return <option value="index + 1">{index + 1}</option>;
            })}
          </select>
          <select className="border border-gray-300 rounded-md  py-2 focus:border-blue-500 focus:border-2 ">
            {Dates?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <select className="border border-gray-300 rounded-md py-2 focus:border-blue-500 focus:border-2 ">
            {GenerateYears()?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <p className="text-[12px] text-gray-500   m-3  ">
          Gender <FaCircleQuestion className="inline" />
        </p>

        <div className="grid grid-cols-2 gap-2 m-3">
          <div className="flex justify-between items-center border border-gray-300 rounded-md p-2">
            <label htmlFor="">Female</label>
            <input type="Radio" name="gender" />
          </div>
          <div className="flex justify-between items-center border border-gray-300 rounded-md p-2">
            <label htmlFor="">Male</label>
            <input type="Radio" name="gender" />
          </div>
        </div>
        <div className="flex flex-col gap-2 m-3">
          <input
            type="text"
            className="rounded-md border border-gray-300 w-full p-2"
            placeholder="Mobile number or email address"
          />
          <input
            type="text"
            className="rounded-md border border-gray-300 w-full p-2"
            placeholder="New password"
          />
        </div>
        <p className="m-3 text-[12px] text-gray-500 w-[90%]">
          People who use our service may have uploaded your contact information
          to Facebook.
          <a href="#" className="text-blue-500">
            Learn more.
          </a>
        </p>
        <p className="m-3 text-[12px] text-gray-500 w-[90%]">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <Link to={"/"}>
          <button className="text-[20px] font-bold bg-[#00A400] block mx-auto text-white rounded-md font-sans py-1 px-15">
            Sign Up{" "}
          </button>
        </Link>
        <Link to={"/"}>
          <p className="text-center text-blue-500 font-semibold my-3 pb-3">
            Already have an account?
          </p>
        </Link>
      </div>
    </>
  );
};

export default Register;
