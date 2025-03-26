
import React from "react";
import { Header } from "@/components/sections/Header";
import { Templates } from "@/components/sections/Templates";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { ProductStructuredData, OrganizationStructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#F5F2E9]">
      <SEO />
      <ProductStructuredData />
      <OrganizationStructuredData />
      <div className="w-full max-w-[1440px]">
        <Header />
        <Templates />
        <AboutUs />
        <WhoIsItFor />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
