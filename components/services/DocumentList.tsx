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
};

const DocumentList = ({ number, title, subTitle }: Props) => {
  return (
    <motion.div variants={childVariant} className="py-5 space-y-2">
      <div className="text-xs font-bold text-custom-blue">0{number}.</div>
      <div>{title}</div>
      <div className="text-xs text-custom-dark-gray">{subTitle}</div>
    </motion.div>
  );
};

export default DocumentList;
