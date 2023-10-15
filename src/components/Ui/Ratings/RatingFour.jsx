import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const RatingFour = () => {
  return (
    <div className="flex gap-1.5 text-yellow-400 hover:text-yellow-500">
      <FaStar className="w-[14px] "></FaStar>
      <FaStar className="w-[14px] "></FaStar>
      <FaStar className="w-[14px] "></FaStar>
      <FaStar className="w-[14px] "></FaStar>
      <FaRegStar className="w-[14px] "></FaRegStar>
    </div>
  );
};

export default RatingFour;
