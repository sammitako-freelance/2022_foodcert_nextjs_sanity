import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  label: string;
  category: string;
  color: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const LabelList = ({ label, category, color }: Props) => {
  const textColor =
    parseInt(color) % 2 !== 0 ? "text-custom-blue" : "text-custom-green";
  return (
    <motion.div variants={childVariant} className="flex items-center">
      <div className="basis-11/12 text-sm text-custom-black mr-5 sm:mr-3 md:mr-0 leading-relaxed">
        {label}
      </div>
      <div className="basis-1/12">
        <div className="flex justify-center">
          <CheckCircleIcon className={`w-5 h-5 ${textColor}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default LabelList;
