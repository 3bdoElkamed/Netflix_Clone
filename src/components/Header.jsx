import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/card.jpg";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();

  const [links, setLinks] = useState([
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/", name: "Series" },
    { id: 3, to: "/movies", name: "Movies" },
    { id: 4, to: "/", name: "Popular" },
    { id: 5, to: "/mylist", name: "My List" },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef();
  const headerRef = useRef();

  const handleScroll = () => {
    if (headerRef.current) {
      if (window.scrollY > 1) {
        headerRef.current.style.background = "#000";
      } else {
        headerRef.current.style.background = "transparent";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="fixed w-full left-0 top-0 z-40 transition-all duration-200"
      ref={headerRef}
    >
      <div className="container text-white flex items-center justify-between h-[70px]">
        <div className="left flex items-center gap-4">
          <div className="w-[120px]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <nav className="relative">
            <div
              className="menu md:hidden flex items-center gap-1 cursor-pointer"
              onClick={() => setShowLinks(!showLinks)}
            >
              Browse
              <MdKeyboardArrowDown />
            </div>
            <ul
              className={`links ${showLinks ? "showlinks" : ""}`}
              ref={linksRef}
            >
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="hover:text-red-500 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right flex items-center gap-3">
          <div className={`search ${showSearch ? "showsearch" : ""}`}>
            <button
              onFocus={() => {
                setShowSearch(true);
                setIsHovered(true);
              }}
              onBlur={() => {
                if (!isHovered) setShowSearch(false);
              }}
            >
              <IoSearch className="text-lg cursor-pointer hover:opacity-80 transition-all duration-200 hover:text-red-500" />
            </button>
            {isHovered && (
              <input
                autoFocus={showSearch ? true : false}
                type="text"
                onBlur={() => {
                  setShowSearch(false);
                  setIsHovered(false);
                }}
              />
            )}
          </div>
          <span>KID</span>
          <IoIosNotifications className="text-xl cursor-pointer hover:opacity-80 transition-all duration-200 hover:text-red-500" />
          <div className="w-[40px] h-[40px]">
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-fit rounded-full cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
          <FaPowerOff
            className="text-lg text-red-500 cursor-pointer hover:opacity-80 transition-all duration-200 hover:text-red-500"
            onClick={() => navigate("/signin")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
