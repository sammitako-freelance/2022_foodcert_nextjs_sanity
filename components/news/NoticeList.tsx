"use client";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { News } from "../../typings";
import LinkButton from "../LinkButton";
import NoticeCard from "./NoticeCard";
import { client } from "../../libs/sanity.client";
import { useEffect, useRef, useState } from "react";

interface Props {
  list: News[];
}

const NoticeList = ({ list }: Props) => {
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
      <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-notice-list-background">
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
          <div className="text-2xl font-bold text-custom-black mb-10 sm:mb-20">
            The latest
          </div>
          <div className="grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((item, idx) => (
              <NoticeCard
                key={item._id}
                category={item.categories.title}
                title={item.title}
                summary={item.summary}
                date={item.publishedAt}
                route={item.slug.current}
              />
            ))}
          </div>
        </div>
        {/* NOTICE가 더 있을 때만 활성화 */}
        <div className="flex justify-center items-center mt-20">
          {/* <LinkButton
            pathLink="/notice"
            title="Load More"
            backgroundColor="bg-custom-black"
            textColor="text-custom-beige"
            borderColor=""
          /> */}
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
