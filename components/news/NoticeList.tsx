"use client";
import { motion } from "framer-motion";
import { News } from "../../typings";
import LinkButton from "../LinkButton";
import NoticeCard from "./NoticeCard";

type Props = {
  list: News[];
};

const NoticeList = ({ list }: Props) => {
  // console.log(list);
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section>
      {/* HERO BACKGROUND */}
      <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-notice-background">
        <div
          id="content-container"
          className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
        >
          <p id="content-line" className="text-2xl font-bold text-custom-beige">
            News
          </p>
        </div>
      </div>
      {/* LIST */}
      <div className="bg-custom-light-gray w-full py-24">
        <div className="w-5/6 mx-auto">
          <div className="text-2xl font-bold text-custom-black mb-10">
            The latest
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className="grid grid-flow-row sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {list.map((item, idx) => (
              <NoticeCard
                key={idx}
                category={item.categories.title}
                title={item.title}
                summary={item.summary}
              />
            ))}
          </motion.div>
        </div>
        {/* NOTICE가 더 있을 때만 활성화 */}
        <div className="flex justify-center items-center mt-12">
          <LinkButton
            pathLink="/notice"
            title="Load More"
            backgroundColor="bg-custom-black"
            textColor="text-custom-beige"
            borderColor=""
          />
        </div>
      </div>
      <style jsx>{`
        /* 
      https://www.w3docs.com/snippets/css/how-to-limit-border-length-with-css.html
      */
        #content-container {
          position: relative;
          padding-top: 10px;
        }
        #content-line:before {
          content: "";
          border-top: #f1f1e7 4px solid;
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
        }
      `}</style>
    </section>
  );
};

export default NoticeList;
