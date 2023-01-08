import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import MainNewsList from "./MainNewsList";
import LinkButton from "../LinkButton";
import { News, Category } from "../../typings";

type Props = {
  news: News[];
  category: Category[];
};

const NewsSection = ({ news, category }: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const container = {
    hidden: {},
    visible: {
      transition: { delay: 0.4, staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="news"
      className="mx-auto min-h-full w-5/6 sm:w-4/6 py-20 bg-white"
    >
      <motion.div
      // onViewportEnter={() => setClickedMenu("news")}
      >
        <div className="flex flex-col">
          <div className="mx-auto">
            <TitleText textSize="">Our news</TitleText>
          </div>
          <div className="py-10">
            {/* TITLE */}
            <div className="mt-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="my-3"
              >
                <div className="text-xs font-bold content-container">
                  <ul className="content-block flex">
                    {category.map((cat, idx) => (
                      <li
                        key={idx}
                        className={`content group ${
                          cat.title.toLowerCase() === "efsa"
                            ? "text-custom-blue"
                            : "text-custom-green"
                        }`}
                      >
                        <p className="px-2 group-first:pl-0">
                          {cat.title.toUpperCase()}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <h1 className="font-bold text-custom-black text-lg">
                  House Boutique 주요 소식
                </h1>
              </motion.div>
              {/* NEWS LIST */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="mt-10 grid-cols-1 divide-y-2"
              >
                {news.map((item, idx) => (
                  <MainNewsList
                    key={idx}
                    link={item.slug.current}
                    title={item.title}
                    category={item.categories.title}
                    date={item.publishedAt}
                    textColor={
                      item.categories.title.toLowerCase() === "efsa"
                        ? "text-custom-blue"
                        : "text-custom-green"
                    }
                  />
                ))}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-center items-center mt-10"
                onClick={() => setClickedMenu("news")}
              >
                <LinkButton
                  pathLink="/notice"
                  title="더 보러가기"
                  textColor="text-custom-beige"
                  backgroundColor="bg-black"
                  borderColor=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .content-container ul li {
          position: relative;
        }

        .content-container ul li::before {
          content: "";
          width: 2px;
          height: 12px;
          background-color: #a8aaba;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .content-container ul .content {
          display: block;
        }

        .content-container ul li:first-child::before {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
