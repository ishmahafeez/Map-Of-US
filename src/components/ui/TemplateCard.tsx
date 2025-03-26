
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TemplateCardProps {
  image: string;
  title: string;
  description: React.ReactNode;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  image,
  title,
  description,
}) => {
  const isMobile = useIsMobile();
  
  return (
   <div className="flex-1 bg-[#EBE9E0] flex flex-col items-start p-4 md:p-5 lg:p-[35px] h-full max-w-[350px] sm:max-w-none mx-auto sm:mx-0 w-full">
     <div className="w-full flex justify-center">
       <img 
         src={image} 
         alt={`${title} - Custom relationship map template with ${title.includes("Basic") ? "5" : title.includes("Standard") ? "8" : "12"} locations`} 
         className="w-full max-w-[264px] h-auto aspect-[264/292] mb-5 md:mb-[20px] lg:mb-[30px] object-cover"
       />
     </div>
     <div className="w-full px-[calc((100%-264px)/2)] md:px-0">
       <h3 className="text-xl font-bold mb-3 md:mb-[15px]">{title}</h3>
       <div className="text-s text-left w-full">{description}</div>
     </div>
   </div>
  );
};
