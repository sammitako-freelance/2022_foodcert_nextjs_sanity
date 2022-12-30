import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import Card from "../Card";
import TitleText from "../TitleText";

type Props = {};

const ServiceSection = (props: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section
      id="services"
      className="mx-auto min-h-full w-full py-20 bg-custom-beige bg-opacity-50"
    >
      <motion.div onViewportEnter={() => setClickedMenu("services")}>
        <div className="flex flex-col justify-center items-center">
          <TitleText textSize="">Our services</TitleText>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className="py-10 space-y-8 md:space-y-0 md:flex md:space-x-10"
          >
            <Card
              pathLink="/services/efsa"
              textColor="text-custom-blue"
              backgroundColor="bg-custom-blue"
              borderColor="border-custom-blue"
              service="efsa"
            />
            <Card
              pathLink="/services/fssai"
              textColor="text-custom-green"
              backgroundColor="bg-custom-green"
              borderColor="border-custom-green"
              service="fssai"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
