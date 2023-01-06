import Link from "next/link";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

type Props = {
  page: string;
  clickedPage: string;
  setClickedPage: (value: string) => void;
};

const NewLink = ({ page, clickedPage, setClickedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  console.log(lowerCasePage);
  const link =
    lowerCasePage === "home"
      ? ""
      : lowerCasePage === "services"
      ? "services/efsa"
      : lowerCasePage === "efsa"
      ? "services/efsa"
      : lowerCasePage === "fssai"
      ? "services/fssai"
      : lowerCasePage === "faq"
      ? ""
      : lowerCasePage === "news"
      ? "notice"
      : lowerCasePage;
  const borderLine = "border-b-[3px] border-[#f1f1e7] inline-block";

  // const hash = window.location.hash;

  // useEffect(() => {
  //   switch (hash) {
  //     case link:
  //       scroller.scrollTo("elementnamehere", {
  //         duration: 1500,
  //         delay: 100,
  //         smooth: true,
  //         // containerId: 'ContainerElementID',
  //         offset: 10, // Scrolls to element + 50 pixels down the page
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // }, [hash]);

  return (
    <Link
      className={`${clickedPage === lowerCasePage ? borderLine : ""}`}
      href={`/${link}`}
      onClick={() => setClickedPage(clickedPage)}
    >
      {page}
    </Link>
  );
};

export default NewLink;
