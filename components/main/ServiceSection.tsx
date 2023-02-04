import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import { clickedMenuJotai, clickedServiceJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import { MainService } from "../../typings";
import ServiceCard from "./ServiceCard";

type Props = {
  service: MainService[];
};

const ServiceSection = ({ service }: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const [clickedService, setClickedService] = useAtom(clickedServiceJotai);
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

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
            className="py-10 space-y-8 lg:space-y-0 lg:flex lg:space-x-6 xl:space-x-10"
          >
            {service.map((item, idx) => (
              <ServiceCard
                key={idx}
                num={idx + 1}
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
