
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-[725px] flex flex-col items-center top-[-50px] transform-gpu will-change-transform">
     <img
       src="/lovable-uploads/Map_of_us_header_bg.jpg"
       alt="Elegant custom relationship map background with soft tones - Map of Us"
       className="w-full h-[800px] object-cover mt-[-70px] will-change-transform"
       loading="eager"
       decoding="async"
     />
      <div
        className={`absolute w-full flex justify-center items-center ${
          isMobile ? "top-[100px]" : "top-[63px]"
        } will-change-transform`}
        style={{ contain: 'paint' }}
      >
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Map of Us official logo - Custom relationship maps" 
        width={50} 
        height={50} 
        className="w-20 h-20 object-contain mt-[-20px] max-sm:w-8 max-sm:h-8 max-sm:hidden" 
        loading="eager"
        decoding="async"
      />
        <img
          src="/lovable-uploads/map_of_us _header.PNG"
          alt="Map of Us brand text logo - Turning relationships into beautiful maps"
          className={`${isMobile ? 'w-[90%] max-w-[400px] h-auto' : 'w-[660px] h-auto max-lg:w-[500px] max-sm:w-[320px]'}`}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="absolute flex flex-col items-center gap-[55px] px-[260px] top-[168px] max-md:px-[100px] max-sm:px-5 mt-[-40px] will-change-transform"
           style={{ contain: 'layout style paint' }}>
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
        onClick={() => window.open("https://www.instagram.com/ish.map/", "_blank")}
      >
        Order Yours
      </button>
      </div>
    </section>
  );
};
