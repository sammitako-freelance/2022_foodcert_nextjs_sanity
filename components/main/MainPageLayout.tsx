"use client";
import React from "react";
import { MainHero, MainService, News, Category } from "../../typings";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import ServiceSection from "./ServiceSection";

interface Props {
  hero: MainHero[];
  service: MainService[];
  news: News[];
  category: Category[];
}

const MainPageLayout = ({ hero, service, news, category }: Props) => {
  return (
    <>
      <HeroSection hero={hero} />
      <ServiceSection service={service} />
      <NewsSection news={news} category={category} />
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
