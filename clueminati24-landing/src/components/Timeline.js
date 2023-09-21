import Timecontent from "./TimelineComp/Timecontent";
const Timeline = () => {
  return (
    <div id="timeline" className="h-[100vh] md:h-[70vh] w-[100vw] relative">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey py-4"
      >
        TIMELINE
      </div>
      <div className="my-14">
        <Timecontent title="08:00 AM" content="Team formation & Registration" />
        <Timecontent title="08:30 AM" content="Explanation of GamePlay" />
        <Timecontent title="08:45 AM" content="Clueminati Begins" />
        <Timecontent title="11:45 AM" content="Clueminati Ends" />
        <Timecontent title="11:45 AM" content="Prize Distribution" />
      </div>
    </div>
  );
};

export default Timeline;
