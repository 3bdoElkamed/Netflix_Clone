import React from "react";
import background from "../assets/home.jpg";
import "./landing.css";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const str = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat ab eveniet animi, voluptatibus ad ipsa deserunt vitae, doloremque similique blanditiis molestias aperiam veniam unde corrupti. Corporis, consequuntur ullam. Aliquid? blanditiis molestias aperiam veniam unde
  corrupti. Corporis, consequuntur ullam. Aliquid?`;
  const trucnkString = (str, num) => {
    if (str.length > num) return str.slice(0, num) + "...";
  };
  return (
    <section className="landing relative w-full">
      <div className="hero h-[550px] ">
        <img src={background} alt="" className="h-full w-full object-fit" />
      </div>
      <div className="info absolute top-[40%] text-white left-10">
        <h1 className="mb-3 text-4xl">Oppenheimer</h1>
        <div className="controls flex items-center gap-4">
          <button
            className="px-6 py-2 bg-white text-black"
            onClick={() => navigate("/player")}
          >
            Play
          </button>
          <button className="px-6 py-2 border-1 border border-white">
            Watch Later
          </button>
        </div>
        <p className="pt-3 pb-1 text-gray-300">Released 2021-08-11</p>
        <p className="w-full md:w-[75%] pr-4 text-[17px] font-normal text-gray-100">
          {trucnkString(str, 150)}
        </p>
      </div>
    </section>
  );
};

export default Landing;
