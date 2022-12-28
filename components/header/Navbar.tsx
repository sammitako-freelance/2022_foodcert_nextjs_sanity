import { useAtom } from "jotai";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { clickedMenuJotai, showMenuJotai } from "../../libs/jotai";
import ScrollLink from "../main/ScrollLink";

type Props = {
  isTopOfPage: boolean;
};
const Navbar = ({ isTopOfPage }: Props) => {
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const flexBetween = "flex items-center justify-between";
  const borderLine = "border-b-[3px] border-[#f1f1e7] inline-block";
  const navbarBackground = isTopOfPage
    ? "text-black"
    : "bg-[#243665] drop-shadow";

  return (
    <>
      <nav
        className={`${flexBetween} ${navbarBackground} fixed w-full top-0 z-30 py-6  uppercase font-bold text-[#F1F1E7]`}
      >
        <div className={`${flexBetween} mx-auto w-11/12`}>
          {/* LEFT SIDE */}
          <Link href="/">
            <div className="hover:text-gray-200 transition duration-500 uppercase">
              House Boutique
            </div>
          </Link>
          {/* RIGHT SIDE */}
          <div
            data-cy="nav-btn"
            className="flex md:hidden hover:cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <XMarkIcon className="w-8 h-8 text-[#F1F1E7]" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </div>

          {/* DEFAULT */}
          <div className="hidden md:flex">
            <div className={`${flexBetween} gap-8 `}>
              <div
                id={`${clickedMenu !== "home" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
              >
                <ScrollLink
                  page="Home"
                  clickedPage={clickedMenu}
                  setClickedPage={setClickedMenu}
                />
              </div>
              <div
                id={`${clickedMenu !== "about" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
              >
                <ScrollLink
                  page="About"
                  clickedPage={clickedMenu}
                  setClickedPage={setClickedMenu}
                />
              </div>
              <div
                id={`${clickedMenu !== "services" ? "hover-line" : ""}`}
                className={`${
                  clickedMenu !== "services" ? "" : borderLine
                } relative group cursor-pointer`}
              >
                <ScrollLink
                  page="Services"
                  clickedPage={clickedMenu}
                  setClickedPage={setClickedMenu}
                />
                <div className="w-full absolute pt-2 hidden group-hover:block">
                  <div className="bg-black rounded-lg py-4 text-center space-y-2">
                    <p
                      id={`${clickedMenu !== "efsa" ? "hover-line" : ""}`}
                      className={`cursor-pointer`}
                      onClick={() => setClickedMenu("efsa")}
                    >
                      EFSA
                    </p>
                    <p
                      id={`${clickedMenu !== "fssai" ? "hover-line" : ""}`}
                      className={`cursor-pointer`}
                      onClick={() => setClickedMenu("fssai")}
                    >
                      FSSAI
                    </p>
                  </div>
                </div>
              </div>
              <div
                id={`${clickedMenu !== "news" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
              >
                <ScrollLink
                  page="News"
                  clickedPage={clickedMenu}
                  setClickedPage={setClickedMenu}
                />
              </div>
              <div
                id={`${clickedMenu !== "contact" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
              >
                <ScrollLink
                  page="Contact"
                  clickedPage={clickedMenu}
                  setClickedPage={setClickedMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        #hover-line {
          position: relative;
          display: inline-block;
          height: 100%;
        }
        #hover-line:after {
          display: block;
          content: "";
          border-bottom: solid 3px #f1f1e7;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }
        #hover-line:hover:after {
          transform: scaleX(1);
        }
        #hover-line:after {
          transform-origin: 0% 50%;
        }
      `}</style>
    </>
  );
};

export default Navbar;
