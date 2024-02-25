import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import login from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <HeaderLogin />
      <div className="signup relative flex items-center justify-center">
        <div className="w-full h-screen">
          <img src={login} alt="" className="w-full h-full" />
          <div className="overlay"></div>
        </div>
        <div className="absolute body flex-col items-center justify-center text-center  max-w-[95%]">
          <div className="text text-white text-center ">
            <h1 className="text-[30px] sm:text-[50px] w-[350px] sm:w-[500px] max-w-full  mx-auto">
              Unlimited movies, TV shows and more
            </h1>

            <h4 className="text-[26px] font-semibold -[350px] sm:w-[500px]  max-w-full my-3  mx-auto">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className=" w-[350px] sm:w-[500px]  max-w-full font-medium  mx-auto">
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <form className="flex items-center justify-center flex-wrap w-[600px] max-w-full my-3">
            <input
              type="email"
              className="border-r border-black text-black text-[12px] h-[40px] pl-[10px] flex-1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {showPassword && (
              <input
                type="password"
                className="border-r border-black text-black text-[12px] h-[40px] pl-[10px] w-1/2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            {!showPassword && (
              <button
                onClick={() => {
                  if (email !== "") {
                    setshowPassword(true);
                  }
                }}
                className="text-white bg-red-600 h-[40px] w-[30%] text-sm  bg-red-600 hover:bg-red-500 transition-all duration-200"
              >
                Get Started
              </button>
            )}
          </form>
          <button
            className="text-white block text-center w-fit mx-auto text-sm rounded-sm  p-[4px_10px] bg-red-600 hover:bg-red-500 transition-all duration-200 "
            onClick={() => {
              if (password !== "") {
                navigate("/");
              }
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
