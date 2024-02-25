import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/login.jpg";
import movieImg from "../assets/card.jpg";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { removeMovie } from "../Redux/movieSlice";
const MyList = () => {
  const { movies } = useSelector((state) => state.movie);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="img h-[240px] relative">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="overlay"></div>
      </div>
      <div
        className="absolute top-14 md:top-4 left-2 p-2 cursor-pointer z-[1000] text-white"
        onClick={() => navigate("/")}
      >
        <GoArrowLeft className="text-2xl font-semibold" />
      </div>
      <div className="List p-6">
        <h2 className="text-white mb-5">My List</h2>
        <div className="movies-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative transition-all duration-300"
              onMouseEnter={() => setHoveredMovie(index)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                src={movieImg}
                alt={`Movie ${index}`}
                className="rounded-md"
              />
              {hoveredMovie === index && (
                <div className="overlay text-white cursor-pointer flex items-center justify-center transition-all duration-300">
                  <p
                    className="text-gray-200"
                    onClick={() => navigate("/player")}
                  >
                    {movie.title}
                  </p>
                  <IoIosClose
                    className="absolute right-2 top-2 text-2xl z-50"
                    onClick={() => {
                      dispatch(removeMovie({ id: movie.id }));
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
