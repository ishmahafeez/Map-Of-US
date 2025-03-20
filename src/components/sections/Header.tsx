import React from "react";

export const Header: React.FC = () => {
  return (
    <section className="relative w-full h-[725px] flex flex-col items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cabb150c33937d01dc4f2880c7780970fc3d7b4"
        alt="Header background"
        className="w-full h-[715px] object-cover"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e743a060b73910b734f988712c642512bb3623cd"
        alt="Map of us logo"
        className="absolute w-[660px] h-[168px] top-[63px] max-lg:w-[500px] max-sm:w-[320px]"
      />
      <div className="absolute flex flex-col items-center gap-[55px] px-[260px] top-[168px] max-md:px-[100px] max-sm:px-5">
        <h1 className="w-[730px] text-center text-2xl font-bold leading-normal max-md:w-[500px] max-sm:w-full max-sm:text-xl">
          "It's not just a gift, it's a story being told, a story that speaks
          volumes even without words."
        </h1>
        <p className="text-[#957EC2] text-center text-xl font-bold leading-normal max-sm:text-base">
          Turning peoples relationships into maps
        </p>
      </div>
      <div className="absolute w-full flex justify-center pb-[51px] bottom-0">
        <button className="text-white text-center text-base font-medium w-[187px] h-[51px] bg-[#957EC2] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] hover:bg-[#8670B0] transition-colors">
          Order Yours
        </button>
      </div>
    </section>
  );
};
