"use client";
import { motion } from "framer-motion";
import { ContactPage } from "../../typings";
import ContactCard from "./ContactCard";

type Props = {
  contact: ContactPage[];
};

const ContactForm = ({ contact }: Props) => {
  return (
    <section className="pt-10 md:pt-14 h-full w-full bg-custom-blue">
      <div className="h-full text-custom-beige bg-white relative">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pt-32 pb-40 sm:pt-40 sm:pb-48 md:pb-56 font-bold tracking-widest leading-relaxed bg-custom-blue"
        >
          {/* <div>{contact.subTitle}</div>
          <div>{contact.title}</div> */}

          <div className="uppercase text-xs sm:text-sm text-center">
            {contact[0].subTitle}
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl py-2 text-center">
            {contact[0].title}
          </div>
        </motion.div>
        {/* CONTACT FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="z-10 w-5/6 md:w-4/6 mx-auto h-full"
        >
          <div className="absolute mx-auto left-0 right-0 -top-5 md:-top-16">
            <ContactCard />
          </div>
        </motion.div>
        {/* FAKE DIV */}
        <div className="h-[68rem] md:h-[65rem] invisible"></div>
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
