
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex flex-col items-center px-5 py-[70px] md:px-8 lg:px-[205px] mt-[-80px]">
      <h2 className="text-center text-[40px] mb-5 font-medium">About Us</h2>
      {isMobile ? (
        // Mobile layout
        <div className="w-full max-w-[350px] bg-[#EBE9E0] p-6">
        <div className="flex flex-col gap-5">
          <div className="w-full h-[193px] flex flex-col items-center justify-between p-3 relative">
            <h3 className="text-white text-base font-bold text-center z-10"> 
              Map Of Us
            </h3>
            <img
              src="/lovable-uploads/about_us.JPG"
              alt="Relationship Journey"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0 z-0 opacity-100"
            />
            <p className="text-white text-xs opacity-100 relative -mt-2 text-center z-10">
              Relationship journey maps
            </p>
          </div>
          <div className="text-sm">
            <p className="mb-4">
              The "Map of Us" is a handmade, minimalist sketch—a first-glance
              depiction that grasps the essence of your entire relationship story,
              allowing you to visually experience the deep connection you share with
              your loved ones.
            </p>
            <p>
              While albums and pictures capture only a fraction of the story, this
              experience brings to life everything that exists in memory—every
              precious moment, the little details, the shared activities, and the
              milestones that left a lasting mark.
            </p>
          </div>
        </div>
      </div>
      
      ) : (
        // Tablet and Desktop layout
        <div className="w-full bg-[#EBE9E0] p-5 md:p-[30px] lg:p-[50px]">
        <div className="flex gap-5 md:gap-[30px] flex-col md:flex-row">
          <div className="w-full md:w-[275px] h-[180px] md:h-[267px] flex flex-col items-center justify-between p-4 md:p-5 shrink-0 relative">
            <h3 className="text-white text-lg md:text-xl font-bold text-center z-10">
              Map Of Us
            </h3>
            <img
              src="/lovable-uploads/about_us.JPG"
              alt="Relationship Journey"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0 z-0 opacity-100"
            />
            <p className="text-white text-base opacity-100 relative -mt-4 text-center z-10">
              Relationship journey maps
            </p>
            </div>
            <div className="text-base md:text-lg lg:text-xl flex-1">
              <p className="mb-4">
                The "Map of Us" is a handmade, minimalist sketch—a first-glance
                depiction that grasps the essence of your entire relationship story,
                allowing you to visually experience the deep connection you share with
                your loved ones.
              </p>
              <p>
                While albums and pictures capture only a fraction of
                the story, this experience brings to life everything that exists in
                memory—every precious moment, the little details, the shared
                activities, and the milestones that left a lasting mark.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
