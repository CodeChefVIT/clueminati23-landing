"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  return (
    <div className="min-h-[80vh] w-[100vw] relative cursor-default ">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[12px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 tracking-[7px]"
      >
        About Event
      </div>
      <div className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 text-grey">
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-[1.5] lg:text-1xl lg:tracking-wide lg:font-semibold sm:text-lg sm:tracking-wide sm:font-semibold"
        >
          Welcome to <span className="text-green">Clueminati</span> – the
          ultimate fusion of intellect, technology, and adventure! Your chance
          to prove your savvy skills. An adrenaline-pumping gamified treasure
          hunt that will redefine amusement. Teams are competing in a thrilling
          race, armed with clues and hints that challenge your coding
          proficiency. An inquisitive mix of indoor and outdoor gameplay leading
          you to the treasure box. Are you ready to decipher and secure your
          glory? Let Clueminati begin!
        </p>
      </div>
    </div>
  );
};

export default About;
