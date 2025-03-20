import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] mb-[5px] p-[15px] rounded-[5px] border-[#F2F4F6]">
      <button
        className="w-full flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="w-[15px] h-[15px] bg-[#957EC2] mr-3" />
        <div className="text-xl text-left">{question}</div>
      </button>
      {answer && isOpen && (
        <div className="text-base opacity-80 p-[15px]">{answer}</div>
      )}
    </div>
  );
};
