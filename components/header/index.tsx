import Navbar from "./Navbar";
import { isTopOfPageJotai, showMenuJotai } from "../../libs/jotai";
import { useAtom, useAtomValue } from "jotai";
import MobileNavbar from "./MobileNavbar";

const Header = ({}) => {
  const [show, setShow] = useAtom(showMenuJotai);
  const isTopOfPage = useAtomValue(isTopOfPageJotai);

  return (
    <header>
      {show ? (
        <>
          <Navbar isTopOfPage={isTopOfPage} />
          <MobileNavbar />
        </>
      ) : (
        <Navbar isTopOfPage={isTopOfPage} />
      )}
    </header>
  );
};

export default Header;
