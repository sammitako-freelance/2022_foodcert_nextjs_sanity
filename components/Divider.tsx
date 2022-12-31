import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Divider = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="relative flex py-5 items-center"
    >
      <div className="flex-grow border-t border-custom-dark-gray"></div>
      {/* <span class="flex-shrink mx-4 text-gray-400">Content</span> */}
      <div className="flex-grow border-t border-custom-dark-gray"></div>
    </motion.div>
  );
};

export default Divider;
