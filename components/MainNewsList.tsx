import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  category: string;
  textColor: string;
  date: string;
  link: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const MainNewsList = ({ title, category, textColor, date, link }: Props) => {
  return (
    <section className="mx-auto w-full items-center justify-center h-full hover:cursor-pointer hover:shadow-md">
      <Link href={`/notice/${link}`}>
        <motion.div
          variants={childVariant}
          className="flex justify-between items-center py-4 space-x-2"
        >
          <div className="flex flex-col gap-1 font-bold truncate">
            <div className="text-sm text-black truncate">{title}</div>
            <div className="flex space-x-2">
              <div className={`text-xs ${textColor}`}>{category}</div>
              <div className="text-xs text-custom-dark-gray">{date}</div>
            </div>
          </div>
          <div className="p-1 rounded-full bg-[#D9D9D9] text-custom-beige">
            <ChevronRightIcon className="w-4 h-4" />
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default MainNewsList;
