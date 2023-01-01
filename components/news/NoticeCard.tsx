import { motion } from "framer-motion";
import ClientSideRoute from "../ClientSideRoute";
type Props = {
  category: string;
  title: string;
  summary: string;
  date: string;
  route: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const NoticeCard = ({ category, title, summary, date, route }: Props) => {
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
    <ClientSideRoute route={`/notice/${route}`}>
      <motion.div
        variants={childVariant}
        className="rounded-lg shadow-md bg-white group hover:cursor-pointer h-full"
      >
        <div className="px-10 py-16">
          <div
            className={`inline-block self-start iuppercase py-1 px-2 rounded-md text-xs text-custom-beige group-hover:opacity-70 ${backgroundColor}`}
          >
            {category?.toUpperCase()}
          </div>

          <div className="pt-5 text-sm text-custom-dark-gray">{date}</div>
          <div className="pt-2 pb-5 text-custom-black font-bold group-hover:opacity-70">
            {title}
          </div>
          <div className="space-y-5 text-custom-dark-gray text-sm group-hover:opacity-70 line-clamp-5">
            {summary}
          </div>
        </div>
      </motion.div>
    </ClientSideRoute>
  );
};

export default NoticeCard;
