"use client";
import {
  MainHero,
  MainService,
  News,
  Category,
  FaqData,
  MainContact,
} from "../../typings";
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
  faq: FaqData[];
  contact: MainContact;
}

const MainPageLayout = ({
  hero,
  service,
  news,
  category,
  faq,
  contact,
}: Props) => {
  return (
    <section>
      <HeroSection hero={hero} />
      <ServiceSection service={service} />
      <NewsSection news={news} category={category} />
      <FaqSection faq={faq} />
      <ContactSection contact={contact} />
    </section>
  );
};

export default MainPageLayout;
