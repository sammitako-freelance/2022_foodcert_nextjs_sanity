import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import Card from "../Card";
import TitleText from "../TitleText";

type Props = {};

const FaqSection = (props: Props) => {
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

          <div className="w-4/6 my-10 text-custom-black border rounded-lg p-5 bg-white text-left">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
