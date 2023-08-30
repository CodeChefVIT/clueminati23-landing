import { color, motion, easeInOut } from "framer-motion";

const Timeline = () => {
  const events = [
    { time: "Coming Soon...", event: "" },
    { time: "Coming Soon...", event: "" },
    { time: "Coming Soon...", event: "" },
    { time: "Coming Soon...", event: "" },
    { time: "Coming Soon...", event: "" },
  ];
  console.log(100 / events.length);
  return (
    <div id="timeline" className="h-[100vh] md:h-[70vh] w-[100vw] relative">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey py-4"
      >
        TIMELINE
      </div>
      <div className="flex w-full h-full justify-center items-center pt-20">
        <div
          id="aclonica"
          className="flex flex-col h-[65%] mt-10 text-grey text-6xl md:text-4xl"
        >
          Coming Soon...
        </div>
      </div>
      {/* <div id="aclonica" className="flex md:h-[60vh] flex-col h-[65%] mt-10">
        {events.map((e, index) => {
          return (
            <motion.div
              key={index}
              // className={`flex ml-40 h-[20%]`}
              className={`flex justify-start mx-auto sm:ml-2 sm:gap-[20vw] sm:text-lg h-[${
                100 / events.length
              }%] border-b-[2px] border-neutral-600 w-[75%] md:w-full gap-44 text-grey text-3xl font-semibold z-20 px-5`}
              whileHover={{
                backgroundColor: "#9BD129",
                color: "rgb(13,13,13)",
              }}
              whileTap={{ backgroundColor: "#9BD129", color: "rgb(13,13,13)" }}
              transition={{ duration: 0.01, ease: "easeInOut" }}
            >
              <div className=" flex flex-col justify-center">{e.time}</div>
              <div className="flex flex-col justify-center pr-10">
                {e.event}
              </div>
            </motion.div>
          );
        })}
      
      </div> */}
    </div>
  );
};

export default Timeline;
