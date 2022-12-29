import React from "react";
import LinkButton from "./LinkButton";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  service: string;
};

const Card = ({ textColor, borderColor, backgroundColor, service }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="w-[315px] sm:w-[355px] md:w-[325px] px-6 py-8 shadow-md md:max-w-lg rounded-xl bg-white"
    >
      <div
        className={`inline-block uppercase py-1 px-2 rounded-3xl text-xs text-custom-beige ${backgroundColor}`}
      >
        {service}
      </div>
      <div className="py-5 text-custom-black text-sm font-bold">
        EU 내에서 식품안전을 감독하며 EU정책 보조를 위해 영양, 식이요법, 위해성
        사안을 다루는 과학적 자료의 수집 및 분석
      </div>
      <ul className="space-y-5 text-custom-dark-gray text-xs list-disc mx-5">
        <li>
          식품첨가물, 유아용 식품, 유기농 식품 등 특정용도 식품과 기능 식품, GMO
          식품의 안정성 평가
        </li>
        <li>새롭게 발생하는 식품안전 위해성 식별</li>
        <li>
          과학적 자문과 위해성 평가 내용 등의 정보를 EU시민들에게 전달 및 소통
        </li>
      </ul>
      <div className="flex justify-center items-center pt-10">
        <LinkButton
          title="더 알아보기"
          textColor={textColor}
          borderColor={borderColor}
          backgroundColor="bg-white"
        />
      </div>
    </motion.div>
  );
};

export default Card;
