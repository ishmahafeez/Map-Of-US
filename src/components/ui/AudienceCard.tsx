import React from "react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex-1 bg-[#EBE9E0] flex flex-col items-center p-10 border-4 border-[#957EC2]">
      <h3 className="text-[32px] font-bold mb-[15px]">{title}</h3>
      <p className="text-base text-center mb-[30px]">{description}</p>
      <img
        src={image}
        alt={`${title} illustration`}
        className="w-auto h-[113px]"
      />
    </div>
  );
};
