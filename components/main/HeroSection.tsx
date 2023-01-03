import LinkButton from "../LinkButton";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../../libs/jotai";
import { MainHero } from "../../typings";

type Props = {
  hero: MainHero[];
};

export default function HeroSection({ hero }: Props) {
  const sanityHero = hero[0];
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  return (
    <section
      id="home"
      className="gap-16 pt-10 md:pt-14 h-full bg-cover bg-no-repeat	bg-center bg-gradient-background"
    >
      {/* MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center h-full text-custom-beige"
        // onViewportEnter={() => setClickedMenu("home")}
      >
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
          className="z-10 mt-32 mb-14 text-2xl font-bold tracking-widest leading-relaxed"
        >
          {sanityHero.title.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </motion.div>
        {/* BUTTON */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 pb-20 md:pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <LinkButton
              pathLink="/contact"
              title="contact us"
              textColor="text-custom-blue"
              backgroundColor="bg-custom-mint"
              borderColor=""
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
        <div className="flex items-center justify-center pb-3">
          <ChevronDownIcon className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
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
