"use client";
import { motion } from "framer-motion";
import { ContactPage } from "../../typings";
import LinkButton from "../LinkButton";
import ContactCard from "./ContactCard";

type Props = {
  // contact: ContactPage;
};

const ContactForm = ({}: Props) => {
  return (
    <section className="pt-10 md:pt-14 h-full w-full bg-custom-blue">
      <div className="h-full text-custom-beige bg-white relative">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pt-40 pb-40 sm:pb-48 md:pb-56 font-bold tracking-widest leading-relaxed bg-custom-blue"
        >
          {/* <div>{contact.subTitle}</div>
          <div>{contact.title}</div> */}

          <div className="uppercase text-xs sm:text-sm text-center">
            we are always here to support you
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl py-2 text-center">
            문의 남겨주시면 답변 드리겠습니다
          </div>
        </motion.div>
        {/* CONTACT FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="z-10 w-5/6 md:w-4/6 mx-auto h-full"
        >
          <div className="absolute-container w-5/6 md:w-4/6 top-[16rem] sm:top-[18rem]">
            <ContactCard />
          </div>
        </motion.div>
        {/* FAKE DIV */}
        {/* <div className="h-[62rem] sm:h-[60rem] md:h-[58rem] relative "></div> */}
        {/* BUTTON */}
        <div className="flex flex-col sm:flex-row py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mx-auto"
          >
            <LinkButton
              pathLink="/contact"
              title="submit"
              textColor="text-custom-beige"
              backgroundColor="bg-custom-black"
              borderColor=""
            />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .absolute-container {
          position: absolute;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          /* WIDTH: Need a specific value to work */
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
