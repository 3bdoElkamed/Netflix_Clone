import React from "react";
import "./row.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Movie from "./Movie";

const Row = ({ id, section }) => {
  const scrollLeft = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft -= 500;
  };
  const scrollRight = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft += 500;
  };
  return (
    <div className="slider-container w-[92%] mx-auto relative max-w-full">
      <h2 className="pl-4 py-3 text-white text-[20px]">{section}</h2>
      <div className=" flex items-center">
        <GoChevronLeft className="arrow sm:-left-7" onClick={scrollLeft} />
        <div
          id={`slider${id}`}
          className="w-full h-full whitespace-nowrap overflow-hidden scrollbar-hide scroll-smooth "
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <Movie key={index} id={Date.now() + index} />
          ))}
        </div>
        <GoChevronRight
          className="arrow right-0 sm:-right-8"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default Row;
