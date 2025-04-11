
import React from "react";
import { TemplateCard } from "../ui/TemplateCard";
import { useIsMobile } from "@/hooks/use-mobile";

export const Templates: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="flex flex-col items-center px-5 py-[70px] md:px-8 lg:px-[205px]">
      <h2 className="text-center text-[40px] mb-5">Templates</h2>
      <div className="flex gap-4 w-full max-md:flex-wrap max-sm:flex-col max-sm:items-center">
        <TemplateCard
          image="/lovable-uploads/5_.jpg"
          title="Basic Map Of Us"
          description={
            <ul>
              <li>• 5 locations</li>
              <li>• $75 - Digital Delivery</li>
              <li>• $80 - Digital + Physical Print (only available in Pakistan) </li>
              <li>• 12X16.5 in. </li>
              <li>• 12 in. Wooden Frame</li>
              <li style={{ color: '#EBE9E0' }}> map of us</li>
              <li style={{ color: '#EBE9E0' }}> map of us</li>
            </ul>
          }
        />

        <TemplateCard
          image="/lovable-uploads/8_.jpg"
          
          title="Standard Map Of Us"
          description={
            <ul>
              <li>• 8 locations</li>
              <li>• Features a timeline of your relationship</li>
              <li>• $125 - Digital Delivery</li>
              <li>• $133 - Digital + Physical Print (only available in Pakistan) </li>
              <li>• 16X20 in. </li>
              <li>• 16 in. Wooden Frame</li>
            </ul>
          }
        />
        <TemplateCard
          image="/lovable-uploads/12_.jpg"
          title="Premium Map Of Us"
          description={
            <ul>
              <li>• 12 locations</li>
              <li>• Features a timeline of your relationship</li>
              <li>• $150 - Digital Delivery</li>
              <li>• $158 - Digital + Physical Print (only available in Pakistan) </li>
              <li>• 16X20 in. </li>
              <li>• 16 in. Wooden Frame</li>
            </ul>
          }
        />
      </div>
      <button
        className="w-full max-w-[350px] md:max-w-[500px] bg-[#957EC2] font-inter shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-center text-white text-2xl font-medium mt-[35px] py-2.5 rounded-[10px] hover:bg-[#8670B0] transition-colors"
        onClick={() => window.open("https://www.instagram.com/ish.map/", "_blank")}
      >
        Get Yours
      </button>
    </section>
  );
};
