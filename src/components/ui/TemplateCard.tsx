import React from "react";

interface TemplateCardProps {
  image: string;
  title: string;
  description: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex-1 bg-[#EBE9E0] flex flex-col items-center p-[35px]">
      <img src={image} alt={title} className="w-[264px] h-[292px] mb-[30px]" />
      <h3 className="text-xl font-bold mb-[15px]">{title}</h3>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};
