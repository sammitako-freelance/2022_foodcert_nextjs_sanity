"use client";
import { useEffect, useState } from "react";
import LinkButton from "../LinkButton";
import { AnimatePresence, motion } from "framer-motion";
import { MainHero } from "../../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useAtom, useAtomValue } from "jotai";
import { clickedHomeJotai, clickedMenuJotai } from "../../libs/jotai";

type Props = {
  hero: MainHero[];
};

export default function HeroSection({ hero }: Props) {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const clickedHome = useAtomValue(clickedHomeJotai);

  const sanityHero = hero[0];
  const heroImages = sanityHero.mainImageUrl;
  const [count, setCount] = useState(0);
  const intervalTime = 5000;
  const autoFlag = true;
  let slideInterval: any;

  const autoSlide = () => {
    const newIndex = Math.abs(count + 1) % heroImages.length;
    slideInterval = setInterval(() => setCount(newIndex), intervalTime);
  };

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    if (autoFlag) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [count]);

  // useEffect(() => {
  //   if (clickedHome) {
  //     const element = document.getElementById("home");
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [clickedHome]);

  return (
    <section id="home" className="">
      {/* HERO IMAGE */}
      {/* <AnimatePresence> */}
      <motion.div
        key={count}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        style={{
          width: "100%",
          height: "100%",
          // background: `linear-gradient(107.04deg, rgba(130, 132, 138, 0.5) 38.27%, rgba(130, 132, 138, 0.5) 38.28%, rgba(39, 55, 98, 0.5) 113.7%)`,
          background: `linear-gradient(107.04deg, rgba(130, 132, 138, 0.5) 38.27%, rgba(130, 132, 138, 0.5) 38.28%, rgba(39, 55, 98, 0.5) 113.7%), url('${
            heroImages[Math.abs(count) % heroImages.length]
          }') no-repeat center center / cover`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundSize: "cover",
        }}
        className="gap-16 pt-10 md:pt-14 relative text-black text-6xl"
      >
        <div className="">
          <ChevronLeftIcon
            className="w-10 h-10 xs:w-14 xs:h-14 px-2 xs:px-4 text-custom-beige absolute top-1/2 left-0 hover:cursor-pointer hover:opacity-80"
            onClick={() => setCount(count - 1)}
          />
          <ChevronRightIcon
            className="w-10 h-10 xs:w-14 xs:h-14 px-2 xs:px-4 text-custom-beige absolute top-1/2 right-0 hover:cursor-pointer hover:opacity-80"
            onClick={() => setCount(count + 1)}
          />
        </div>
        {/* MAIN HEADER */}
        <div
          className="mx-auto w-5/6 items-center justify-center h-full text-custom-beige"
          // onViewportEnter={() => setClickedMenu("home")}
        >
          {/* HEADINGS */}
          <div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.2 }}
            // transition={{ duration: 0.5 }}
            // variants={{
            //   hidden: { opacity: 0, x: -100 },
            //   visible: { opacity: 1, x: 0 },
            // }}
            className="z-10 mt-32 mb-14 text-2xl font-bold tracking-widest leading-relaxed"
          >
            {sanityHero.title.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          {/* BUTTON */}
          <div className="flex flex-col gap-5 items-start sm:items-center sm:flex-row pb-20 md:pb-28">
            <div
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true, amount: 0.2 }}
              // transition={{ delay: 0.2, duration: 0.5 }}
              // variants={{
              //   hidden: { opacity: 0, x: -100 },
              //   visible: { opacity: 1, x: 0 },
              // }}
              className="flex"
              onClick={() => setClickedMenu("contact")}
            >
              <LinkButton
                pathLink="/contact"
                title="contact us"
                textColor="text-custom-blue"
                backgroundColor="bg-custom-mint"
                borderColor=""
              />
            </div>
            <motion.div
              // initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ elay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-sm"
            >
              <div>Email: {sanityHero.email}</div>
              <div>Tel: {sanityHero.tel}</div>
            </motion.div>
          </div>
          <div className="flex items-center justify-center pb-5">
            <div className="py-2 inline-flex gap-3">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                    Math.abs(count) % heroImages.length === idx
                      ? "bg-custom-green"
                      : "bg-custom-dark-gray"
                  }`}
                  onClick={() => setCount(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {/* </AnimatePresence> */}
    </section>
  );
}
// export async function generateStaticParams() {
//   const hero = await fetchMainHero();
//   return {
//     props: {
//       hero,
//     },
//   };
// }
