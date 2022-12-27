"use client";
import Navbar from "./Navbar";
import { isTopOfPageJotai, showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [show, setShow] = useAtom(showMenuJotai);
  const [isTopOfPage, setIsTopOfPage] = useAtom(isTopOfPageJotai);

  return (
    <header>
      {show ? (
        <>
          <Navbar isTopOfPage={isTopOfPage} />
          <MobileNavbar isTopOfPage={isTopOfPage} />
        </>
      ) : (
        <Navbar isTopOfPage={isTopOfPage} />
      )}
    </header>
  );
};

export default Header;
