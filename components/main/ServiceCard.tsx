import React from "react";
import LinkButton from "../LinkButton";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import { Category } from "../../typings";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  category: Category;
  list: Array<string>;
  title: string;
  num: number;
};

const ServiceCard = ({ category, list, title, num }: Props) => {
  const textColor = num % 2 !== 0 ? "text-custom-blue" : "text-custom-green";
  const borderColor =
    num % 2 !== 0 ? "border-custom-blue" : "border-custom-green";
  const backgroundColor = num % 2 !== 0 ? "bg-custom-blue" : "bg-custom-green";
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  return (
    <motion.div
      variants={childVariant}
      className="min-h-max w-[315px] sm:w-[355px] lg:w-[305px] xl:w-[325px] px-6 py-8 shadow-md rounded-xl bg-white flex flex-col"
    >
      <div
        className={`inline-block self-start iuppercase py-1 px-2 rounded-3xl text-xs text-custom-beige ${backgroundColor}`}
      >
        {category?.title.toUpperCase()}
      </div>

      <div className="py-5 text-custom-black text-sm font-bold">{title}</div>
      <ul className="space-y-5 text-custom-dark-gray text-xs list-disc mx-5">
        {list.map((content, idx) => (
          <li key={idx}>{content}</li>
        ))}
      </ul>
      <div
        className="flex justify-center items-center mt-auto pt-10"
        onClick={() => setClickedMenu(category?.title.toLowerCase())}
      >
        <LinkButton
          pathLink={`/services/${category?.slug}`}
          title="더 알아보기"
          textColor={textColor}
          borderColor={borderColor}
          backgroundColor="bg-white"
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
