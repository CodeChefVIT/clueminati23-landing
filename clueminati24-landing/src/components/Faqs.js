// Faqs.js
import React from "react";
import FaqItem from "./faqItem"; // Adjust the path to match your folder structure

const Faqs = () => {
  return (
    <div className="min-h-[140vh] w-[100vw] relative z-10">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]"
      >
        FAQs
      </div>
      <FaqItem
        question="Is Clueminati a team event?"
        answer="Yes, it is a team event (max 4 persons per team). You can come with your own team, or we can help you find one."
      />
      <FaqItem
        question="Does Clueminati feature CarryMinati?"
        answer="We don't have the streamer, BUT we do have a huge lineup of games for you."
      />
      <FaqItem
        question="Do I need prior coding knowledge for Clueminati?"
        answer="No, not all your team needs coding knowledge, your diverse skills are the ticket to the prize."
      />
      <FaqItem
        question="Why is Clueminati special?"
        answer="Clueminati is not just your regular treasure hunt. You are signing up for the most exciting 4 hours of your life. **Secret: We have surprises guys!**"
      />
      <FaqItem
        question="Is Clueminati an offline event?"
        answer="It is a treasure hunt, that involves teams taking rounds of the campus and coding their way to clues at our venue. "
      />
    </div>
  );
};

export default Faqs;
