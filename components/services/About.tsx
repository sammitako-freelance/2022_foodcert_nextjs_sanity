"use client";
import { ServicePage } from "../../typings";
import Divider from "../Divider";
import DocumentList from "./DocumentList";
import LabelList from "./LabelList";
import { motion } from "framer-motion";

type Props = {
  service: ServicePage;
};

const About = ({ service }: Props) => {
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    service.categories.title?.toLowerCase() === "efsa"
      ? "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]"
      : "before:content-[''] before:border-t-custom-green before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";
  const contentContainerCenter = "relative pb-[10px]";
  const contentBorderCenter =
    service.categories.title?.toLowerCase() === "efsa"
      ? "after:content-[''] after:border-b-custom-blue after:border-b-[4px] after:absolute after:left-[48%] after:-bottom-1 after:md:-bottom-1 after:w-[20px]"
      : "after:content-[''] after:border-b-custom-green after:border-b-[4px] after:absolute after:left-[48%] after:-bottom-1 after:md:-bottom-1 after:w-[20px]";
  const textColor =
    service.categories.title?.toLowerCase() === "efsa"
      ? "text-custom-blue"
      : "text-custom-green";
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section>
      {/* HERO BACKGROUND */}
      <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-[url('https://cdn.sanity.io/images/4k25zhng/production/d3ec2d233309a8daff9e59ff9b45139a69f48964-6000x3376.jpg')] opacity-70">
        <div
          id="content-container"
          className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
        >
          <p id="content-line" className="text-2xl font-bold text-custom-beige">
            Services
          </p>
        </div>
      </div>
      <div className="bg-custom-beige bg-opacity-50 w-full py-24">
        <div className="w-8/12 mx-auto">
          {/* TITLE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={`flex flex-col md:flex-row ${contentContainer} mb-20`}
          >
            <div
              className={`${contentBorder} ${textColor} mx-auto md:justify-start mb-10 md:mb-0 md:basis-1/3 font-bold text-lg tracking-widest`}
            >
              {service.categories.title}
            </div>
            <div className="md:basis-2/3">
              <div className="font-bold">{service.title}</div>
              <ul className="text-custom-dark-gray text-sm list-disc pl-5 pt-6 space-y-1">
                {service.subTitle?.map((data, idx) => (
                  <li key={idx}>{data}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* DOCUMENTATION TITLE */}
          {service.documentationList && (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`flex flex-col md:flex-row mb-10 ${contentContainer}`}
              >
                <div
                  className={`${contentBorder} mx-auto md:justify-start mb-10 md:mb-0 md:basis-1/3 font-bold text-lg ${textColor} tracking-widest`}
                >
                  필수서류
                </div>
                <div className="md:basis-2/3">
                  <div className="text-custom-dark-gray text-sm">
                    {service.documentationTitle}
                  </div>
                </div>
              </motion.div>

              <Divider />
              {/* DOCUMENTATION LIST */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-16"
              >
                {service.documentationList.map((data, idx) => (
                  <div key={data._key} className="">
                    <DocumentList
                      category={service.categories.title}
                      number={idx + 1}
                      title={data.name}
                      subTitle={data.info}
                    />
                  </div>
                ))}
              </motion.div>
              <Divider />
            </>
          )}

          {/* LABELING */}
          {service.labeling && (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`flex flex-col mt-20 ${contentContainerCenter}`}
              >
                <div
                  className={`${contentBorderCenter} text-center font-bold text-lg ${textColor} tracking-widest`}
                >
                  필수 표기 정보
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="uppercase text-sm text-custom-dark-gray mx-auto text-center pt-6 mb-20 tracking-wider"
              >
                LABELING
              </motion.div>
              <div
                className={`text-sm font-bold pb-5 flex justify-end ${textColor}`}
              >
                <div className="basis-11/12 text-sm text-custom-black mr-5 sm:mr-3 md:mr-0 leading-relaxed invisible">
                  INVISIBLE
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="basis-1/12"
                >
                  <div className="flex justify-center">
                    <p className="break-normal">체크</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className="space-y-3 mb-3"
              >
                {service.labeling?.map((data, idx) => (
                  <LabelList
                    key={idx}
                    label={data}
                    category={service.categories.title}
                  />
                ))}
              </motion.div>
            </>
          )}
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

export default About;
