import React from "react";
import vid from "../assets/winter.mp4";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Player = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="text-white relative h-screen">
        <video
          src={vid}
          autoPlay
          muted
          controls
          className="w-full h-full object-cover"
        ></video>
        <div
          className="absolute top-14 md:top-4 left-2 p-2 cursor-pointer z-[1000]"
          onClick={() => navigate("/")}
        >
          <GoArrowLeft className="text-2xl font-semibold" />
        </div>
      </div>
    </>
  );
};

export default Player;
