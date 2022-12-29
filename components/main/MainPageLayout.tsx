"use client";
import React from "react";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import ServiceSection from "./ServiceSection";

const MainPageLayout = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default MainPageLayout;
