"use client";
import Image from "next/legacy/image";
import styled from "styled-components";
import Slick from "./Slick";

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

function SlickItems() {
  return (
    <Slick>
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
    </Slick>
  );
}

export default SlickItems;
