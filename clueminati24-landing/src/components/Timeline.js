import { color, motion, easeInOut } from "framer-motion";

const Timeline = () => {
  const events = [
    { time: "09:00 AM", event: "Event Starts" },
    { time: "10:00 AM", event: "Round 1" },
    { time: "10:00 AM", event: "Round 2" },
    { time: "10:00 AM", event: "Round 3" },
    { time: "06:00 PM", event: "Event Ends" },
  ];
  console.log(100 / events.length);
  return (
    <div className="h-[100vh] md:h-[70vh] w-[100vw] relative">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey py-4"
      >
        TIMELINE
      </div>
      <div id="aclonica" className="flex md:h-[60vh] flex-col h-[65%] mt-10">
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
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className=" flex flex-col justify-center">{e.time}</div>
              <div className="flex flex-col justify-center pr-10">
                {e.event}
              </div>
            </motion.div>
          );
        })}
        {/* <motion.div 
            // className={`flex ml-40 h-[20%]`}
            className={`flex ml-40 h-[${100/events.length}%] border-b-2 border-grey gap-44 text-grey text-3xl font-semibold z-20 px-10`}
            whileHover={{
                backgroundColor:"#EB5939",
                color:"rgb(13,13,13)",
            }}
            transition={{duration:0.2,ease: "circInOut"}}
>
            <div className=" flex flex-col justify-center">hh:mm AM</div>
            <div className="flex flex-col justify-center">Place</div>
          </motion.div>         */}
      </div>
    </div>
  );
};

export default Timeline;
