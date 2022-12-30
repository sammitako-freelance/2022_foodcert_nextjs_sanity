"use client";
import React from "react";
import { MainHero } from "../../typings";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import ServiceSection from "./ServiceSection";
import { GetServerSideProps } from "next";
import { fetchMainHero } from "../../libs/fetchMainHero";

interface Props {
  hero: MainHero;
}

const MainPageLayout = ({ hero }: Props) => {
  return (
    <>
      <HeroSection hero={hero} />
      <ServiceSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default MainPageLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hero = await fetchMainHero();
  return {
    props: {
      hero,
    },
  };
};
