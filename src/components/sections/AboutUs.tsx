import React from "react";

export const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-[205px] py-[70px] max-md:px-[100px] max-sm:px-5">
      <h2 className="text-center text-[40px] mb-5">About Us</h2>
      <div className="flex gap-[30px] bg-[#EBE9E0] p-[50px] max-md:flex-col">
        <div className="w-[275px] h-[267px] bg-[#957EC2] flex flex-col justify-between p-5">
          <h3 className="text-white text-xl font-bold">
            A single title comes here
          </h3>
          <p className="text-white text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="text-xl flex-1">
          The "Map of Us" is a handmade, minimalist sketch—a first-glance
          depiction that grasps the essence of your entire relationship story,
          allowing you to visually experience the deep connection you share with
          your loved ones. While albums and pictures capture only a fraction of
          the story, this experience brings to life everything that exists in
          memory—every precious moment, the little details, the shared
          activities, and the milestones that left a lasting mark.
        </div>
      </div>
    </section>
  );
};
