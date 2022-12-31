import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import { FaqData } from "../../typings";

type Props = {
  faq: FaqData[];
};

const FaqSection = ({ faq }: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const [open, setOpen] = useState(1);
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section
      id="faq"
      className="mx-auto min-h-full w-full py-20 bg-custom-beige bg-opacity-50"
    >
      <motion.div onViewportEnter={() => setClickedMenu("faq")}>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-2 mx-5 md:mx-0">
            <TitleText textSize="text-xs sm:text-sm">Got Questions?</TitleText>
            <TitleText textSize="text-xl sm:text-4xl">
              Frequently Asked Questions
            </TitleText>
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
            className="w-5/6 sm:w-4/6 my-10 text-custom-black border rounded-lg p-5 bg-white text-left"
          >
            {/* <Fragment>
              <>
                {faq?.map((item, idx) => {
                  <Accordion key={idx} open={open === idx}>
                    <AccordionHeader
                      className="border-b-2 text-md sm:text-xl text-left"
                      onClick={() => handleOpen(idx)}
                    >
                      {item.question}
                    </AccordionHeader>
                    <AccordionBody className="text-custom-dark-gray text-sm sm:text-base">
                      {item.answer}
                    </AccordionBody>
                  </Accordion>;
                })}
              </>
            </Fragment> */}
            <Fragment>
              <Accordion open={open === 1}>
                <AccordionHeader
                  className="border-b-2 text-md sm:text-xl text-left"
                  onClick={() => handleOpen(1)}
                >
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-custom-dark-gray text-sm sm:text-base">
                  We're not always in the position that we want to be at. We're
                  constantly growing. We're constantly making mistakes. We're
                  constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  className="border-b-2 text-md sm:text-xl text-left"
                  onClick={() => handleOpen(2)}
                >
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-custom-dark-gray text-sm sm:text-base">
                  We're not always in the position that we want to be at. We're
                  constantly growing. We're constantly making mistakes. We're
                  constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader
                  className="text-md sm:text-xl text-left"
                  onClick={() => handleOpen(3)}
                >
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-custom-dark-gray text-sm sm:text-base">
                  We're not always in the position that we want to be at. We're
                  constantly growing. We're constantly making mistakes. We're
                  constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
