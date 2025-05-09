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
      "border border-[#E5E5E5] rounded-md overflow-hidden mb-2",
      isOpen && "shadow-sm"
    )}>
      <button
        className="w-full flex items-center justify-between py-4 px-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-[#957EC2] flex items-center justify-center mr-3 text-white">
            <span className="text-sm">?</span>
          </div>
          <h3 className="text-base font-medium text-left">{question}</h3>
        </div>
        <div className="text-[#957EC2]">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-sm text-gray-700 border-t border-[#E5E5E5]">
          {htmlAnswer ? (
            <div className="prose prose-sm max-w-none">{htmlAnswer}</div>
          ) : answer ? (
            <p>{answer}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};
