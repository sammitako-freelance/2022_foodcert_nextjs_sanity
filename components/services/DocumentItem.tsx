import React from "react";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  number: number;
  title: string;
  subTitle: string;
  category: string;
};

const DocumentItem = ({ number, title, subTitle, category }: Props) => {
  const textColor =
    category?.toLowerCase() === "efsa"
      ? "text-custom-blue"
      : "text-custom-green";
  const num = (n: number) => {
    const tmp = n.toString();
    const numDigit = tmp.length;
    if (numDigit === 1) {
      return "0" + tmp;
    } else {
      return tmp;
    }
  };
  return (
    <motion.div variants={childVariant} className="py-5 space-y-2">
      <div className={`text-xs font-bold ${textColor}`}>{num(number)}.</div>
      <div>{title}</div>
      <div className="text-xs text-custom-dark-gray">{subTitle}</div>
    </motion.div>
  );
};

export default DocumentItem;
