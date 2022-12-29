import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import NewsList from "../NewsList";
import LinkButton from "../LinkButton";

type Props = {};

const NewsSection = (props: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const container = {
    hidden: {},
    visible: {
      transition: { delay: 0.4, staggerChildren: 0.2 },
    },
  };
  return (
    <section id="news" className="mx-auto min-h-full w-4/6 py-20 bg-white">
      <motion.div onViewportEnter={() => setClickedMenu("news")}>
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
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="my-3"
              >
                <div className="text-xs font-bold content-container">
                  <div className="content-block">
                    <div className="text-custom-blue content">EFSA</div>
                    <div className="text-custom-green content">FSSAI</div>
                  </div>
                </div>
                <h1 className="font-bold text-custom-black text-lg">
                  House Boutique 주요 소식
                </h1>
              </motion.div>
              {/* NEWS LIST */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className="mt-10 grid-cols-1 divide-y-2"
              >
                <NewsList
                  title="북, 나흘 만에 또 대규모 포사격... '9.19 위반'"
                  category="EFSA"
                  date="2022.10.18"
                  textColor="text-custom-blue"
                />
                <NewsList
                  title="북, 나흘 만에 또 대규모 포사격... '9.19 위반'"
                  category="FSSAI"
                  date="2022.10.18"
                  textColor="text-custom-green"
                />
                <NewsList
                  title="북, 나흘 만에 또 대규모 포사격... '9.19 위반'"
                  category="EFSA"
                  date="2022.10.18"
                  textColor="text-custom-blue"
                />
                <NewsList
                  title="북, 나흘 만에 또 대규모 포사격... '9.19 위반'"
                  category="EFSA"
                  date="2022.10.18"
                  textColor="text-custom-blue"
                />
                <NewsList
                  title="북, 나흘 만에 또 대규모 포사격... '9.19 위반'"
                  category="FSSAI"
                  date="2022.10.18"
                  textColor="text-custom-green"
                />
              </motion.div>
              <div className="flex justify-center items-center mt-10">
                <LinkButton
                  title="더 보러가기"
                  textColor="text-custom-beige"
                  backgroundColor="bg-black"
                  borderColor=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .content-container {
          display: grid;
          width: 100%;
        }

        .content-block {
          display: grid;
          grid-template-columns: repeat(2, 30px); /* CHANGED */
          grid-gap: 20px;
        }

        .content {
          height: 20px;
          position: relative; /* ADDED */
        }

        .content:after {
          /* ADDED */
          content: "";
          position: absolute;
          border-left: 1px solid #d9d9d9;
          right: -10px; /* adjust this */
          height: 80%; /* adjust this */
        }

        .content:last-child:after {
          /* ADDED */
          display: none; /* Hide the divider for the last block */
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
