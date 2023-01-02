import { useEffect, useState } from "react";
import { debounce } from "../../libs/utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  clickedMenuJotai,
  showMenuJotai,
  isTopOfPageJotai,
} from "../../libs/jotai";
import NewLink from "./NewLink";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useAtom(isTopOfPageJotai);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage
    ? "text-custom-beige"
    : "text-custom-beige bg-custom-black drop-shadow";

  const controlMobile = () => {
    setShow(!show);
    if (show === true) {
      setShowNavbar(true);
    }
  };
  const controlNavbar = debounce(() => {
    if (window.scrollY === 0) {
      setClickedMenu("home");
      setShowNavbar(true);
    }
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsTopOfPage(false);
        setShowNavbar(true);
      } else {
        setIsTopOfPage(true);
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    }
  }, 100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <>
      {(showNavbar || window.scrollY === 0) && (
        <nav
          className={`${flexBetween} ${navbarBackground} ${
            !showNavbar &&
            !isTopOfPage &&
            "-top-full duration-300 transition-all ease-in"
          }
          fixed w-full top-0 z-30 py-6 uppercase font-bold duration-300 transition-all ease-in`}
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
              onClick={controlMobile}
            >
              {show ? (
                <XMarkIcon className="w-8 h-8 text-custom-beige hover:x-7 hover:h-7" />
              ) : (
                <Bars3Icon
                  className={`${
                    isTopOfPage ? "text-custom-beige" : ""
                  } w-8 h-8`}
                />
              )}
            </div>

            {/* DEFAULT */}
            <div className="hidden md:flex">
              <div className={`${flexBetween} gap-8 `}>
                <div
                  id={`${clickedMenu !== "home" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <NewLink
                    page="Home"
                    clickedPage={clickedMenu}
                    setClickedPage={setClickedMenu}
                  />
                </div>

                <div
                  id={`${clickedMenu !== "services" ? "hover-line" : ""}`}
                  className={`relative group cursor-pointer`}
                >
                  <NewLink
                    page="Services"
                    clickedPage={clickedMenu}
                    setClickedPage={setClickedMenu}
                  />
                  <div className="w-full absolute pt-2 hidden group-hover:block">
                    <div className="bg-black rounded-lg py-4 text-center space-y-2">
                      <p
                        id={`${clickedMenu !== "efsa" ? "hover-line" : ""}`}
                        className={`cursor-pointer !text-custom-beige`}
                        onClick={() => setClickedMenu("efsa")}
                      >
                        <Link href="/services/efsa">EFSA</Link>
                      </p>
                      <p
                        id={`${clickedMenu !== "fssai" ? "hover-line" : ""}`}
                        className={`cursor-pointer !text-custom-beige`}
                        onClick={() => setClickedMenu("fssai")}
                      >
                        <Link href="/services/fssai">FSSAI</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id={`${clickedMenu !== "news" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <NewLink
                    page="News"
                    clickedPage={clickedMenu}
                    setClickedPage={setClickedMenu}
                  />
                </div>
                <div
                  id={`${clickedMenu !== "faq" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <NewLink
                    page="Faq"
                    clickedPage={clickedMenu}
                    setClickedPage={setClickedMenu}
                  />
                </div>
                <div
                  id={`${clickedMenu !== "contact" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <NewLink
                    page="Contact"
                    clickedPage={clickedMenu}
                    setClickedPage={setClickedMenu}
                  />
                </div>
              </div>
            </div>
          </div>
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

              /* border-bottom: solid 3px #000231; */

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
        </nav>
      )}
    </>
  );
};

export default Navbar;
