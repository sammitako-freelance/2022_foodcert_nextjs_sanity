import { useAtom } from "jotai";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  clickedPage: string;
  setClickedPage: (value: string) => void;
};

const ScrollLink = ({ page, clickedPage, setClickedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  const borderLine = "border-b-[3px] border-[#f1f1e7] inline-block";

  return (
    <AnchorLink
      className={`${clickedPage === lowerCasePage ? borderLine : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setClickedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default ScrollLink;
