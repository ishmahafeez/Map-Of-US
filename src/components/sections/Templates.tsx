import React from "react";
import { TemplateCard } from "../ui/TemplateCard";

export const Templates: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-[205px] py-[70px] max-md:px-[100px] max-sm:px-5">
      <h2 className="text-center text-[40px] mb-5">Templates</h2>
      <div className="flex gap-[29px] max-md:flex-wrap max-sm:flex-col">
      <TemplateCard
  image="https://cdn.builder.io/api/v1/image/assets/TEMP/89c14aefe40e7947b4940654b0369816abb93e38"
  title="Basic Map Of Us"
  description={
    <ul>
      <li>• 5 locations</li>
      <li>• $200 - Digital Delivery</li>
      <li>• $245 - Digital + Physical Print </li>
      <li>• 16x20 in.</li>
      <li>• 11X14in. </li>
      <li>• 11 in. Wooden Frame</li>
    </ul>
  }
/>


        <TemplateCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/89c14aefe40e7947b4940654b0369816abb93e38"
          title="Standard Map Of Us"
          description={
            <ul>
              <li>• 8 locations</li>
              <li>• Features a timeline of your relationship</li>
              <li>• $500 - Digital Delivery</li>
              <li>• $550 - Digital + Physical Print </li>
              <li>• 16X20 in. </li>
              <li>• 16 in. Wooden Frame</li>
            </ul>
          }
        />
        <TemplateCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/a20e5ed94a6f5c4fcf6c3948b64ef4f66bcc019b"
          title="Premium Map Of Us"
          description={
            <ul>
              <li>• 12 locations</li>
              <li>• Features a timeline of your relationship</li>
              <li>• $700 - Digital Delivery</li>
              <li>• $765 - Digital + Physical Print </li>
              <li>• 16X20 in. </li>
              <li>• 16 in. Wooden Frame</li>
            </ul>
          }
        />
      </div>
   <button
     className="w-full max-sm:w-[350px] bg-[#957EC2] font-inter shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-center text-white text-2xl font-medium mt-[35px] py-2.5 rounded-[10px] hover:bg-[#8670B0] transition-colors"
     onClick={() => window.open("https://www.instagram.com/ish_maps/", "_blank")}
   >
     Get Yours
   </button>
    </section>
  );
};
