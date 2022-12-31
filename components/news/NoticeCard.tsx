import { motion } from "framer-motion";
type Props = {
  category: string;
  title: string;
  summary: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const NoticeCard = ({ category, title, summary }: Props) => {
  const textColor =
    category?.toLowerCase() === "efsa"
      ? "text-custom-blue"
      : "text-custom-green";
  const borderColor =
    category?.toLowerCase() === "efsa"
      ? "border-custom-blue"
      : "border-custom-green";
  const backgroundColor =
    category?.toLowerCase() === "efsa" ? "bg-custom-blue" : "bg-custom-green";
  return (
    <motion.div
      variants={childVariant}
      className="min-h-max w-[315px] sm:w-[355px] md:w-[325px] px-6 py-8 shadow-md rounded-md bg-white flex flex-col group hover:cursor-pointer"
    >
      <div
        className={`inline-block self-start iuppercase py-1 px-2 rounded-md text-xs text-custom-beige group-hover:opacity-70 ${backgroundColor}`}
      >
        {category?.toUpperCase()}
      </div>

      <div className="py-5 text-custom-black font-bold group-hover:opacity-70">
        {title}
      </div>
      <div className="space-y-5 text-custom-dark-gray text-sm group-hover:opacity-70">
        {summary}
      </div>
    </motion.div>
  );
};

export default NoticeCard;
