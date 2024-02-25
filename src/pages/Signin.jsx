import React from "react";
import "./signin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import login from "../assets/login.jpg";
import HeaderLogin from "../components/HeaderLogin";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <HeaderLogin />
      <div className="signin relative flex items-center justify-center">
        <div className="w-full h-screen">
          <img src={login} alt="" className="w-full h-full" />
          <div className="overlay"></div>
        </div>
        <form className="w-[320px] max-w-full h-[400px]">
          <h2 className="mb-4">Sign In</h2>
          <input
            type="email"
            className="w-full pl-[10px] h-[40px] text-white bg-slate-600 rounded-sm text-[12px]"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full pl-[10px] h-[40px] text-white bg-slate-600 rounded-sm text-[12px] my-5"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full h-[40px] bg-red-700 rounded-sm text-[13px] font-medium"
            onClick={() => {
              if (email !== "" && password !== "") {
                navigate("/");
              }
            }}
          >
            Sign In
          </button>
          <div className="flex items-center justify-between w-full my-5">
            <label
              htmlFor="check"
              className="text-[12px] text-gray-400 flex items-center"
            >
              <input
                type="checkbox"
                id="check"
                className="mr-1 cursor-pointer"
              />
              Remember Me
            </label>
            <span className="text-[12px] text-gray-400 hover:underline cursor-pointer">
              Need Help?
            </span>
          </div>
          <p className="text-left w-full text-[12px]  text-gray-400">
            New to Netflix?
            <a href="/register" className="text-white hover:underline">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
