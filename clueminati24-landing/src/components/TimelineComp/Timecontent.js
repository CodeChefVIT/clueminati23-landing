import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Timecontent = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div>
      <motion.div
        id="aclonica"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`${
          isHovered
            ? `bg-green duration-300 text-[#000000]]`
            : `bg-transparent duration-300 text-[#b7ab98]`
        }`}
      >
        <div className="mx-[13%] md:mx-[10%] w-[100vw] ">
          <div className="text h-[120px] md:h-[80px] w-[100vw] flex justify-evenly items-center">
            <p className="text-4xl lg:text-3xl md:text-2xl sm:text-base font-bold tracking-wide w-[30%] justify-self-start">
              {props.title}
            </p>
            <p className="w-[50%] sm:w-[40%] mx-[13%] md:mx-[10%] text-3xl tracking-wide items-center font-bold md:text-lg lg:text-[25px] sm:text-sm md:tracking-tighter ">
              {props.content}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex border-b-[2px] border-[#AA9E8B] opacity-50 w-[75%] md:w-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Timecontent;
