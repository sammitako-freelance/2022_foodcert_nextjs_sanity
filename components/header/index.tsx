"use client";
import Navbar from "./Navbar";

import { showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import MobileNavbar from "./MobileNavbar";
import { useEffect } from "react";

// type Props = {
//   isTopOfPage: boolean;
// };

const Header = () => {
  const [show, setShow] = useAtom(showMenuJotai);
  // const isTopOfPage = useAtomValue(isTopOfPageJotai);

  return (
    <header>
      {show ? (
        <>
          <Navbar />
          <MobileNavbar />
        </>
      ) : (
        <Navbar />
      )}
    </header>
  );
};

export default Header;
