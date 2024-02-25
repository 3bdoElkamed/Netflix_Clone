import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.png";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full left-0 top-0 z-40 transition-all duration-200">
      <div className="container text-white flex items-center justify-between h-[70px]">
        <div className="left flex items-center gap-4">
          <div className="w-[120px]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
        </div>
        <div className="right flex items-center gap-3">
          <button
            className="rounded-md px-3 py-1 text-sm"
            onClick={() => navigate("/signin")}
          >
            SignIn
          </button>
          <button
            className="bg-red-700 rounded-md px-4 py-2 text-sm  bg-red-600 hover:bg-red-500 transition-all duration-200"
            onClick={() => navigate("/register")}
          >
            SignUp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
