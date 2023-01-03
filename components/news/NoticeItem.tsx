"use client";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import LinkButton from "../LinkButton";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { News } from "../../typings";
import { StyleBodyContent } from "../StyleBodyContent";
import PageNotFound from "../PageNotFound";

type Props = {
  data: News;
};

const NoticeItem = ({ data }: Props) => {
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";
  const backgroundColor =
    data?.categories.title.toLowerCase() === "efsa"
      ? "bg-custom-blue"
      : "bg-custom-green";

  return (
    <>
      {!data ? (
        <PageNotFound />
      ) : (
        <section>
          {/* HERO BACKGROUND */}
          <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-notice-item-background">
            <div
              id="content-container"
              className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
            >
              <p
                id="content-line"
                className="text-2xl font-bold text-custom-beige"
              >
                Post
              </p>
            </div>
          </div>
          {/* TITLE */}
          <div className="bg-white">
            <div className="py-20 sm:py-24 w-5/6 mx-auto space-y-6 sm:space-y-10">
              <div className="text-center sm:text-left">
                <div
                  className={`inline-block uppercase py-2 px-4 rounded-md text-sm text-custom-beige ${backgroundColor}`}
                >
                  {data.categories.title}
                </div>
              </div>

              <p className="text-3xl sm:text-4xl font-bold">{data.title}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex space-x-10 text-sm">
                  <div className="flex flex-col space-y-2">
                    <div className="text-gray-600">작성자</div>
                    <div className="text-custom-black font-bold">
                      {data.author.name}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-gray-600">작성일</div>
                    <div className="text-custom-black font-bold">
                      {data.publishedAt}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-10 text-custom-black mt-10 sm:mt-0">
                  <div>
                    <FaFacebook className="w-5 h-5" />
                  </div>
                  <div>
                    <FaTwitter className="w-5 h-5" />
                  </div>
                  <div>
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* IF one file ? download file : download files */}
              {/* Category에 따라 버튼 색깔 테두리 다르게 하고, 호버 시에 bg-color-full */}
              <div className="border inline-block text-red-400">
                파일 다운로드위치
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="bg-custom-light-gray">
            <div className="py-16 sm:py-24 w-5/6 md:w-4/6 mx-auto">
              <PortableText value={data.body} components={StyleBodyContent} />
            </div>
          </div>
          <div className="flex justify-center items-center my-12 sm:my-16 bg-white">
            <LinkButton
              pathLink="/notice"
              title="View All"
              backgroundColor="bg-custom-black"
              textColor="text-custom-beige"
              borderColor=""
            />
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
      )}
    </>
  );
};

export default NoticeItem;
