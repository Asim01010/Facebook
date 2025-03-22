import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const LoginForm = () => {
  const [showeye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });

  // destructure it

  const { email, password } = formField;

  const btnHandle = (e) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (password.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  }, [password]);

  return (
    <>
      <form className="p-2 shadow-xl rounded-md bg-white">
        <input
          value={email}
          name="email"
          onChange={btnHandle}
          type="text"
          className="w-full rounded-md border border-gray-400 outline-none focus:border-blue-500 p-3 my-3"
          placeholder="Email address or phone number"
        />
        <span className="relative">
          <input
            value={password}
            name="password"
            onChange={btnHandle}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className={`w-full rounded-md border border-gray-400 outline-none focus:border-blue-500 p-3 mb-3`}
          />

          {showPass ? (
            <FaEye
              onClick={() => setShowPass(false)}
              className={`absolute top-[50%] right-[5%] -translate-y-1/2 ${
                !showeye && "hidden"
              }`}
              size={20}
              cursor={"pointer"}
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowPass(true)}
              className={`absolute top-[50%] right-[5%] -translate-y-1/2 ${
                !showeye && "hidden"
              }`}
              size={20}
              cursor={"pointer"}
            />
          )}
        </span>
        <Button
          variant="contained"
          className="w-full my-2"
          style={{ padding: "12px", marginTop: "4px", fontWeight: "bold" }}
        >
          Login
        </Button>
        <Link
          className="text-blue-500 hover:underline text-center block my-3
         "
        >
          Forgotten account ?
        </Link>
        <hr className="border-0 bg-gray-300 h-[1px]" />
        <Link to={"/"}>
          <Button
            variant="contained"
            className="w-[50%] "
            style={{
              padding: "12px",
              marginTop: "14px",
              fontWeight: "bold",
              background: "#36A420",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Login
          </Button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
