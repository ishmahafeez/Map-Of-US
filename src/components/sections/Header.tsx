
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-[725px] flex flex-col items-center top-[-50px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cabb150c33937d01dc4f2880c7780970fc3d7b4"
        alt="Map of us background"
        className="w-full h-[715px] object-cover"
      />
      <div
        className={`absolute w-full flex justify-center items-center ${
          isMobile ? "top-[100px]" : "top-[63px]"
        }`}
      >
        <img 
          src="/lovable-uploads/2d2996f8-8f96-4b66-b69c-db15f65a8e1b.png" 
          alt="Logo" 
          width={50} 
          height={50} 
          className="w-20 h-20 object-contain mt-[-20px] max-sm:w-8 max-sm:h-8" 
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e743a060b73910b734f988712c642512bb3623cd"
          alt="Map of us logo"
          className={`${isMobile ? 'w-[90%] max-w-[400px] h-auto' : 'w-[660px] h-auto max-lg:w-[500px] max-sm:w-[320px]'}`}
        />
      </div>
      <div className="absolute flex flex-col items-center gap-[55px] px-[260px] top-[168px] max-md:px-[100px] max-sm:px-5 mt-[-40px]">
        <br/>
        <h1 className="w-[730px] text-center text-2xl font-bold leading-normal max-md:w-[500px] max-sm:w-full max-sm:text-xl">
          "It's not just a gift, it's a story being told, a story that speaks
          volumes even without words."
        </h1>
       <p className="text-[#957EC2] text-center text-xl font-bold leading-normal font-lora max-sm:text-base mt-[-40px]">
         Turning peoples relationships into maps
       </p>
      </div>
      <div className="absolute w-full flex justify-center pb-[51px] bottom-[-60px]">
      <button
        className="text-white text-center text-base font-medium font-inter w-[187px] h-[51px] bg-[#957EC2] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] hover:bg-[#8670B0] transition-colors"
        onClick={() => window.open("https://www.instagram.com/map_of.us/", "_blank")}
      >
        Order Yours
      </button>
      </div>
    </section>
  );
};
