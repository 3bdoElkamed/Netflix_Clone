import React, { useState } from "react";
import movieimg from "../assets/card.jpg";
import vid from "../assets/winter.mp4";
import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../Redux/movieSlice";
const Movie = ({ id }) => {
  const [ishovered, setIshovered] = useState(false);
  const [isfav, setIsfav] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 inline-block"
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <img
        src={movieimg}
        alt=""
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer rounded-md"
      />
      {ishovered && (
        <div className="hover-content absolute top-[-50px] z-10 bg-black text-white rounded-md w-[300px] transition-all duration-600">
          <div className="vid-container w-full relative h-[170px]">
            <img
              src={movieimg}
              alt=""
              className="w-full h-full object-cover cursor-pointer rounded-md absolute top-0"
            />
            <video
              src={vid}
              autoPlay
              muted
              onClick={() => navigate("/player")}
              className="w-full h-full object-cover cursor-pointer rounded-md absolute top-0"
            ></video>
          </div>
          <div className="info">
            <div className="controls flex items-center gap-3 my-3">
              <div
                className=" flex items-center justify-center w-[30px] h-[30px]  border border-white rounded-full cursor-pointer "
                onClick={() => navigate("/player")}
              >
                <FaPlay className="text-[10px] " />
              </div>
              <div className=" flex items-center justify-center w-[30px] h-[30px]  border border-white rounded-full cursor-pointer ">
                <GoPlus className="text-md" />
              </div>
              {!isfav ? (
                <div
                  className=" flex items-center justify-center w-[30px] h-[30px]  border border-white rounded-full cursor-pointer "
                  onClick={() => {
                    setIsfav(true);
                    dispatch(
                      addMovie({
                        id: id,
                        title: "Oppenheimer",
                        img: "../../public/card.jpg",
                      })
                    );
                  }}
                >
                  <FaRegHeart className="text-md" />
                </div>
              ) : (
                <div
                  className=" flex items-center justify-center w-[30px] h-[30px] border border-white rounded-full cursor-pointer "
                  onClick={(e) => {
                    setIsfav(false);
                    dispatch(removeMovie({ id: id }));
                  }}
                >
                  <FaHeart className="text-md" />
                </div>
              )}

              <div className=" flex items-center justify-center w-[30px] h-[30px]  border border-white rounded-full cursor-pointer ">
                <AiOutlineDislike className="text-md" />
              </div>
            </div>
            <p className="text-gray-400 mt-1 text-sm">
              1 hour 14 mins
              <span className="px-1 py-1 border border-gray-500 rounded-md text-sm mx-2">
                +16
              </span>
              1999
            </p>
            <p className="py-2 whitespace-normal text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet .
            </p>
            <p className="font-normal mb-1">Action</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
