import React from "react";
import { FAQItem } from "../ui/FAQItem";

export const FAQ: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-[205px] py-[70px] mt-[-80px] max-md:px-[100px] max-sm:px-5 bg-[#F5F2E9]">
      <h2 className="text-center text-[28px] font-bold mb-[30px]">
        Frequently asked questions
      </h2>
        <div className="w-full max-w-[838px] max-sm:w-[350px]">        
          <FAQItem 
            question="What is the process to Map Of US?" 
            htmlAnswer={
              <>
                <p className="mb-2">After placing your order, you'll receive a Questionnaire via email with guided prompts to share stories, photos, and details about milestones, special places, trips, hobbies, pets, kids, and cherished memories. This ensures your map reflects what matters most. (If this is a gift, you can forward it to the recipient to fill out.)</p>
                <p className="mb-2">Once your turn in the queue arrives, I'll send an initial outline of your map for review, allowing us to discuss any changes. Then, I'll begin creating your one-of-a-kind piece!</p>
                <p>You'll receive a Finished Draft 1-2 weeks before your promised ship date, where you can request final edits. If changes are needed, please allow 2-3 days for adjustments. After that, you'll receive a High-Resolution file, and for US orders, your physical print will be on its way! ❤️</p>
              </>
            }
          />
          <FAQItem 
            question="What makes Map Of Us stand out from the crowd?" 
            htmlAnswer={
              <ul className="list-disc pl-5 space-y-1">
                <li>Handmade & Minimalist – A custom artistic sketch, not just a generic gift.</li>
                <li>More Than Photos – Captures emotions, milestones, and shared memories.</li>
                <li>One-of-a-Kind – Every map is uniquely crafted for each couple.</li>
                <li>Sentimental Keepsake – A timeless reminder of love and connection.</li>
                <li className="mt-2 list-none italic">It's not just a map—it's your story in art.</li>
              </ul>
            }
          />
          <FAQItem 
            question='What do you mean by "Locations"?' 
            answer="Locations refer to meaningful places in your journey—where you met, your first home, favorite date spots, or any place with special memories that make your story unique."
          />
          <FAQItem
            question="How long till my Map of Us arrives?"
            answer="It takes about a week to sketch, create the layout, finalize the draft, and make any requested changes before it's ready for delivery."
          />
      </div>
    </section>
  );
};