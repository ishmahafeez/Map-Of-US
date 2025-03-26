
import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface AudienceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const AudienceCard: React.FC<AudienceCardProps> = ({
  title,
  description,
  image,
  className,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      "flex-1 bg-[#EBE9E0] border-4 border-[#957EC2]",
      isMobile 
        ? "w-[350px] flex flex-row items-center p-4 h-[113px]" 
        : "flex flex-col items-center p-10",
      className
    )}>
      {isMobile ? (
        <>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-left">{description}</p>
          </div>
          <img
            src={image}
            alt={`${title} relationship map - Gift idea for ${title.toLowerCase()}`}
            className="w-auto h-[56px] ml-2"
          />
        </>
      ) : (
        <>
          <h3 className="text-[32px] font-bold mb-[15px]">{title}</h3>
          <p className="text-base text-center mb-[30px]">{description}</p>
          <img
            src={image}
            alt={`${title} relationship map - Perfect gift for ${title.toLowerCase()}`}
            className="w-auto h-[113px]"
          />
        </>
      )}
    </div>
  );
};
