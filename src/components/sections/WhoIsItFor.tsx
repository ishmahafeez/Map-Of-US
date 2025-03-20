import React from "react";
import { AudienceCard } from "../ui/AudienceCard";

export const WhoIsItFor: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-[205px] py-[70px] max-md:px-[100px] max-sm:px-5">
      <h2 className="text-center text-[40px] mb-5">Who Is It For?</h2>
      <div className="flex gap-[29px] max-md:flex-wrap max-sm:flex-col">
        <AudienceCard
          title="Siblings"
          description="Turn your childhood memories into a timeless treasure. From playful pranks to heartfelt moments"
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f3391a578017226aea31a2bcedd81a0fc8bf99"
        />
        <AudienceCard
          title="Friendships"
          description="Turn your friendship moments into a lasting treasure.From laughter-filled adventures to heartfelt moments"
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/04243ccc15e3603b9da2fc8a8a6d0c036f1dc5a1"
        />
        <AudienceCard
          title="Couples"
          description="Turn your romance into a map of cherished moments. From your first glance to forever after,relive every heartwarming chapter."
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5eb805eafa9ec3274976febecf59f1d08be8d8"
        />
      </div>
    </section>
  );
};
