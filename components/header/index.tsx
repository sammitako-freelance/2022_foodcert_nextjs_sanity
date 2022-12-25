import Navbar from "./Navbar";
import { showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [show, setShow] = useAtom(showMenuJotai);
  return <header>{show ? <MobileNavbar /> : <Navbar />}</header>;
};

export default Header;
