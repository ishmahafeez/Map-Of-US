
import React from "react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer 
      className="border-t border-b border-gray-200 py-[30px] flex flex-col items-center w-full transform-gpu will-change-transform" 
      style={{ contain: 'layout style paint' }}
    >
      <div className="flex items-center gap-4 mb-4">
        <a 
          href='https://www.instagram.com/ish.map/' 
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
          src="/lovable-uploads/logo.png" 
          alt="Map of Us logo - Navigate to top of page" 
          width={40} 
          height={40} 
          className="w-[24px] h-[24px] object-contain" 
          loading="eager"
          decoding="async"
        />
        </button>
      </div>
      <p className="text-center text-sm opacity-75">
        © 2019 Lift Media. All rights reserved.
      </p>
    </footer>
  );
}
