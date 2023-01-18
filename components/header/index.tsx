"use client";
import Navbar from "./Navbar";

import { showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import MobileNavbar from "./MobileNavbar";
import { Category } from "../../typings";

type Props = {
  category: Category[];
};

const Header = ({ category }: Props) => {
  const [show, setShow] = useAtom(showMenuJotai);

  return (
    <header>
      {show ? (
        <>
          <MobileNavbar category={category} />
        </>
      ) : (
        <Navbar category={category} />
      )}
    </header>
  );
};

export default Header;
