import React from "react";
import logo from "../assets/clueminati_logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import TraingleSVG from "./TraingleSVG";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex h-[50vh] sm:h-[40vh] mx-[13%] md:mx-[10%] py-5 gap-[5vw] mdl:ml-20 sm:ml-5 sm:justify-between items-center sm:px-5 sm:mt-32 md:mt-80">
      {/* <div className="flex ml-40 py-10 border-t-2 border-grey h-[57vh] gap-20 "> */}

      <div className="flex flex-col justify-center lg:hidden">
        <Image alt="" src={logo} />
      </div>
      <div className="flex flex-col justify-around py-16 lg:py-2 sm:hidden">
        <div className="text-lg font-normal tracking-[5px] mdl:tracking-[2px] text-grey py-7">
          CODECHEF-VIT
        </div>
        <div className="text-lg font-normal tracking-[5px] mdl:tracking-[2px] text-grey py-7">
          COOKOFF 8.0
        </div>
        <div className="z-10">
          <Link href={"/landing"}>
            <motion.button
              className="rounded-[4px] w-[200px] py-2 px-12 bg-green text-black sm:font-semibold font-bold sm:border-dark-grey hover:text-[#fff] text-[18px] md:text-[13px] hover:font-semibold"
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              Register
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-20 lg:py-2">
        <div className="text-lg md:text-base font-normal tracking-[7px] text-grey mdl:tracking-[2px]">
          OTHER EVENTS
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              Tech Talks 4.0
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              Cook Off 8.0
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-20 lg:py-2">
        <div className="text-lg md:text-base font-normal tracking-[7px] text-grey mdl:tracking-[2px]">
          NAVIGATION
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              Portal
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              About
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              Timeline
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl md:text-xl text-grey font-bold hover:text-green hover:duration-100 xl:text-2xl">
              FAQ&apos;s
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
