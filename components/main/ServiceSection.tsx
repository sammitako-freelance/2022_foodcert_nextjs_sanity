import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import { clickedMenuJotai, clickedServiceJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import { MainService } from "../../typings";
import ServiceCard from "./ServiceCard";
import classNames from "classnames";

type Props = {
  service: MainService[];
};

const ServiceSection = ({ service }: Props) => {
  const isOdd = service.length % 2 !== 0;

  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const [clickedService, setClickedService] = useAtom(clickedServiceJotai);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const gridClasses = classNames({
    grid: true,
    "grid-cols-3": isOdd && windowWidth > 1280, // 3 columns for odd number of cards on large screens
    "grid-cols-4": !isOdd && windowWidth > 1280, // 4 columns for even number of cards on large screens
    "grid-cols-2": !isOdd && windowWidth <= 1280 && windowWidth > 768, // 2 columns for even number of cards on medium screens
    "grid-cols-1": windowWidth <= 768, // 1 column for all on small screens
  });

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (clickedService) {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => setClickedService(false);
  }, [clickedService]);
  return (
    <section
      id="services"
      className="mx-auto min-h-full w-full py-20 bg-custom-beige bg-opacity-50"
    >
      <motion.div
      // onViewportEnter={() => setClickedMenu("services")}
      >
        <div className="flex flex-col justify-center items-center mx-auto">
          <TitleText textSize="">Our services</TitleText>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className={`py-10 gap-8 xl:gap-5 ${gridClasses}`}
          >
            {service.map((item, idx) => (
              <ServiceCard
                key={idx}
                num={item?.categories.number}
                category={item?.categories}
                list={item?.list}
                title={item?.title}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
