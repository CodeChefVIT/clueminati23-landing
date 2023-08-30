import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="min-h-[80vh] sm:min-h-[60vh] w-[100vw] relative cursor-default  text-black bg-green pt-32">
      <div
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] mb-10 tracking-[7px] text-black"
      >
        ABOUT EVENT
      </div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] pt-6 text-dark-grey"
      >
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-[1.5] lg:text-1xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          <span className="text-white">Clueminati</span> is your ticket to a
          digital expedition where logic and code lead the way. Unravel a hidden
          world of binary secrets and electrifying challenges. Flex your inner
          techie as you decode cryptic messages, hack through obstacles, and
          follow the trails of data to unlock the ultimate cache(cash)!
        </p>
      </div>
    </div>

    // </motion.div>
  );
};

export default AboutMask;
