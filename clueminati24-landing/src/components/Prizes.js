import React, { useState } from "react";
import { motion } from "framer-motion";
import Awards from "./PrizesComps/Awards";

const Prizes = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div
      id="prizes"
      className="h-[95vh] sm:h-[67vh] w-[100vw] text-grey flex flex-col items-start justify-between gap-[3.1rem] py-20"
    >
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey pt-2"
      >
        PRIZES
      </div>
      <div className="flex w-full h-full justify-center items-center pt-20">
        <div
          id="aclonica"
          className="flex flex-col h-[65%] mt-10 text-grey text-6xl md:text-4xl"
        >
          Coming Soon...
        </div>
      </div>
      {/* <div>
        <Awards
          title="FIRST"
          content="You’ll get like 1.5 Lakhs in cash, damm that's a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="SECOND"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="THIRD"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />

        <div className="flex w-full justify-center">
          <div className="flex border-b-[2px] border-[#AA9E8B] opacity-50 w-[75%] md:w-full" />
        </div>
      </div> */}
    </div>
  );
};

export default Prizes;
