
import React from "react";
import { FAQItem } from "../ui/FAQItem";

export const FAQ: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-[205px] py-[70px] mt-[-80px] max-md:px-[100px] max-sm:px-5 bg-[#F5F2E9]">
      <h2 className="text-center text-[28px] font-bold mb-[30px]">
        Frequently asked questions
      </h2>
      <div className="w-full max-w-[838px]">
        <FAQItem 
          question="What is the process to Map Of US?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <FAQItem 
          question="What makes Map Of Us stand out from the crowd?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <FAQItem 
          question='What do you mean by "Locations"?' 
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <FAQItem
          question="How long till my Map of Us arrives?"
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </section>
  );
};
