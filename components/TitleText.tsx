import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  textSize: string;
};

export default function TitleText({ textSize, children }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`basis-3/5 ${
        textSize === "" ? "text-xl md:text-2xl" : textSize
      } font-bold text-custom-black`}
    >
      {children}
    </motion.div>
  );
}
