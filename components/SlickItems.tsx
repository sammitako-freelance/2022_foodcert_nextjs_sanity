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
    item: "https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "image0",
  },
  {
    item: "https://images.unsplash.com/photo-1553025934-296397db4010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80",
    name: "image1",
  },
  {
    item: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "image2",
  },
  {
    item: "https://images.unsplash.com/photo-1630409346699-79481a79db52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2697&q=80",
    name: "image3",
  },
  {
    item: "https://images.unsplash.com/photo-1646834220465-dd02fcbe1055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "image4",
  },
  {
    item: "https://images.unsplash.com/photo-1568581789190-ae90a7da930b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    name: "image5",
  },
];
interface itemProps {
  children: React.ReactNode;
}
function SlickItems({ children }: itemProps) {
  return (
    <>
      <Slick className="">
        {items.map((item, index) => (
          <SliderItem key={index}>
            {/* <div
              className="bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${item.item})` }}
            /> */}
            <Image src={item.item} height={500} width={1600} alt={item.name} />
          </SliderItem>
        ))}
      </Slick>
      {/* <div>{children}</div> */}
    </>
  );
}

export default SlickItems;
