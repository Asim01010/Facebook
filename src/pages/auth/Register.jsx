import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Register = () => {
  const [months] = useState([
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

  const generateYears = () => {
    let years = [];
    for (let i = 2025; i >= 1905; i--) {
      years.push(i);
    }
    return years;
  };
  return (
    <div>
      <div className="container flex flex-col g items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png"
          alt="Facebook"
          className="w-[200px]"
        />
        <form action="" className="bg-white py-3 rounded-md shadow-xl ">
          <h3 className="text-2xl font-bold font-sans text-center">
            Create a new account
          </h3>
          <h6 className="text-sm text-gray-600 text-center">
            It's quick and easy.
          </h6>
          <hr className="border-0 bg-gray-300 h-[1px] my-3" />
          <input
            type="text"
            className="border outline-0 border-gray-300 rounded-md inline p-2 mx-2 "
            placeholder="First Name"
          />
          <input
            type="text"
            className="border outline-0 border-gray-300 rounded-md inline  p-2 mx-2"
            placeholder="Surname"
          />
          <p className="text-[12px]  text-gray-500 m-2 ">
            Date of birth <FaQuestionCircle className="inline" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <select
              name="date"
              id=""
              className="p-2 border-gray-300 border rounded-md m-2"
            >
              {Array.from({ length: 30 }).map((_, index) => {
                return (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <select
              name="date"
              id=""
              className="p-2 border-gray-300 border rounded-md m-2"
            >
              {months?.map((item, index) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
            <select
              name="date"
              id=""
              className="p-2 border-gray-300 border rounded-md m-2"
            >
              {generateYears()?.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
