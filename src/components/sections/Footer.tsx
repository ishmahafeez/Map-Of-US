
import React from "react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-b border-gray-200 py-[30px] flex flex-col items-center">
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mb-4 text-black hover:text-[#957EC2] transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} />
      </a>
      <p className="text-center text-sm opacity-75">
        © 2019 Lift Media. All rights reserved.
      </p>
    </footer>
  );
};
