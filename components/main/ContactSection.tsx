import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import TitleText from "../TitleText";
import LinkButton from "../LinkButton";
import { MainContact } from "../../typings";

type Props = {
  contact: MainContact;
};

const ContactSection = ({ contact }: Props) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section
      id="contact"
      className="mx-auto min-h-[500px] w-full pt-20 contact-bg"
    >
      <motion.div
      // onViewportEnter={() => setClickedMenu("contact")}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-center space-y-2">
            <TitleText textSize="text-2xl"> {contact.title}</TitleText>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-sm text-custom-dark-gray"
            >
              {contact.subTitle}
            </motion.div>
          </div>
          <div className="pt-6 sm:pt-8 space-y-8 md:space-y-0 md:flex md:space-x-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="z-10"
              onClick={() => setClickedMenu("contact")}
            >
              <LinkButton
                pathLink="/contact"
                title="CONTACT US"
                backgroundColor="bg-custom-mint"
                textColor="text-custom-blue"
                borderColor=""
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .contact-bg {
          width: 100%;
          height: 100%;
          background: url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80")
            no-repeat;
          background-attachment: scroll;
          background-position: 50% 0%;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};
// bg-no-repeat bg-cover bg-top bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')]

export default ContactSection;
