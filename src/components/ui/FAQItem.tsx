import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer?: string;
  htmlAnswer?: React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, htmlAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "border border-[#E5E5E5] rounded-md overflow-hidden mb-4",
      isOpen && "shadow-sm"
    )}>
      <button
        className="w-full flex items-center justify-between py-5 px-6 bg-[#f5f2e9] hover:bg-[#EDEBE2] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full bg-[#957EC2] flex items-center justify-center mr-4 text-white">
            <span className="text-base">?</span>
          </div>
          <h3 className="text-lg font-medium text-left">{question}</h3>
        </div>
        <div className="text-[#957EC2]">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-5 text-base text-gray-700 border-t border-[#E5E5E5] bg-[#f5f2e9]">
          {htmlAnswer ? (
            <div className="prose prose-base max-w-none space-y-3">{htmlAnswer}</div>
          ) : answer ? (
            <p>{answer}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};
