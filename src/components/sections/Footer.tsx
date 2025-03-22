
import React from "react";
import { Instagram, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-b border-gray-200 py-[30px] flex flex-col items-center">
      <div className="flex items-center gap-4 mb-4">
        <a 
          href="https://www.instagram.com/ish_maps/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:text-[#957EC2] transition-colors"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={24} />
        </a>
        <button
          onClick={scrollToTop}
          className="text-black hover:text-[#957EC2] transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <img 
            src="/lovable-uploads/2d2996f8-8f96-4b66-b69c-db15f65a8e1b.png" 
            alt="Logo" 
            width={24} 
            height={24} 
            className="w-6 h-6 object-contain" 
          />
        </button>
      </div>
      <p className="text-center text-sm opacity-75">
        © 2019 Lift Media. All rights reserved.
      </p>
    </footer>
  );
}
