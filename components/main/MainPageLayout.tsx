"use client";
import React from "react";
import { MainHero, MainService } from "../../typings";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import ServiceSection from "./ServiceSection";

interface Props {
  hero: MainHero[];
  service: MainService[];
}

const MainPageLayout = ({ hero, service }: Props) => {
  return (
    <>
      <HeroSection hero={hero} />
      <ServiceSection service={service} />
      <NewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default MainPageLayout;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const hero = await fetchMainHero();
//   return {
//     props: {
//       hero,
//     },
//   };
// };
