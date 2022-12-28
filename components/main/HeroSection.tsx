"use client";

import LinkButton from "../LinkButton";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/legacy/image";
import styled from "styled-components";
import Slick from "../Slick";

interface itemsProps {
  item: string;
  name: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const items: itemsProps[] = [
  {
    item: "/assets/img/slider-0.jpg",
    name: "image0",
  },
  {
    item: "/assets/img/slider-1.jpg",
    name: "image1",
  },
  {
    item: "/assets/img/slider-2.jpg",
    name: "image2",
  },
  {
    item: "/assets/img/slider-3.jpg",
    name: "image3",
  },
  {
    item: "/assets/img/slider-4.jpg",
    name: "image4",
  },
  {
    item: "/assets/img/slider-5.jpg",
    name: "image5",
  },
];

export default function HeroSection() {
  return (
    <div>
      {/* SLIDER */}
      {/* <Slick className="">
        {items.map((item, index) => (
          <SliderItem key={index}>
            <Image
              src={item.item}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SliderItem>
        ))}
      </Slick> */}

      <section id="home" className="gap-16 pt-10 md:pt-14 h-full bg-gray-600">
        {/* MAIN HEADER */}
        <div className="mx-auto w-5/6 items-center justify-center h-full text-custom-beige">
          {/* HEADINGS */}
          <div className="z-10 mt-32 mb-14 text-2xl font-bold tracking-widest leading-relaxed">
            <div>Beauty & Health</div>
            <div>최고의 해외 진출 파트너</div>
            <div>HOUSE BOUTIQUE</div>
          </div>
          {/* BUTTON */}
          <div className="flex gap-5 pb-20 md:pb-28">
            <div>
              <LinkButton
                title="contact us"
                textColor="text-custom-blue"
                backgroundColor="bg-custom-mint"
              />
            </div>
            <div className="text-sm">
              <div>Email: inf@house-boutique.net</div>
              <div>Tel: 010 - 4250 - 3160</div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-3">
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
