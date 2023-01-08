"use client";
import React, { useEffect, useState } from "react";
import { FaqData } from "../../typings";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/solid";

type Props = {
  faq: FaqData[];
};

const FaqAccordion = ({ faq }: Props) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: any) => {
    setOpen(open === value ? -1 : value);
  };

  useEffect(() => {
    setOpen(0);
  }, []);
  return (
    <div className="pb-3">
      {faq.map((item, idx) => (
        <div key={item._id}>
          <div
            className="flex justify-between items-center border-b-2 hover:cursor-pointer py-3 sm:py-5"
            onClick={() => handleOpen(idx)}
          >
            <div className="text-md sm:text-xl text-left text-custom-black font-semibold">
              {item.question}
            </div>
            {open === idx ? (
              <MinusSmallIcon className="w-5 h-5 text-custom-black" />
            ) : (
              <PlusSmallIcon className="w-5 h-5 text-custom-black" />
            )}
          </div>
          <div
            className={`text-custom-dark-gray text-sm sm:text-base overflow-hidden duration-200 transition-all ${
              open === idx ? "pb-3 pt-4 max-h-max" : "max-h-0"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
