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
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  // console.log(path);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useAtom(isTopOfPageJotai);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage
    ? "text-custom-beige"
    : "text-custom-beige bg-custom-black drop-shadow";
  const borderLine = "border-b-[3px] border-[#f1f1e7] inline-block";

  const controlMobile = () => {
    setShow(!show);
    if (show === true) {
      setShowNavbar(true);
    }
  };
  const controlNavbar = debounce(() => {
    if (window.scrollY === 0) {
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
            (!showNavbar || !isTopOfPage) &&
            "-top-full duration-300 transition-all"
          }
          fixed w-full top-0 z-30 py-6 uppercase font-bold duration-300 transition-all`}
        >
          <div className={`${flexBetween} mx-auto w-11/12`}>
            {/* LEFT SIDE */}
            <Link href="/" onClick={() => setClickedMenu("home")}>
              <div
                className={`hover:text-custom-black transition duration-200 uppercase `}
              >
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
                  <Link
                    href="/"
                    className={`
                  ${clickedMenu === "home" && borderLine}
                  `}
                    onClick={() => setClickedMenu("home")}
                  >
                    home
                  </Link>
                </div>

                <div
                  id={`${clickedMenu !== "services" ? "hover-line" : ""}`}
                  className={`relative group cursor-pointer uppercase`}
                >
                  <Link
                    href="/services/efsa"
                    className={`
                  ${clickedMenu === "services" && borderLine}
                  `}
                    onClick={() => setClickedMenu("services")}
                  >
                    services
                  </Link>
                  <div className="w-full absolute pt-2 hidden group-hover:block">
                    <div className="bg-black rounded-lg py-4 text-center space-y-2">
                      <p
                        id={`${clickedMenu !== "efsa" ? "hover-line" : ""}`}
                        className={`cursor-pointer !text-custom-beige`}
                      >
                        <Link
                          className={`
                  ${clickedMenu === "efsa" && borderLine}
                  `}
                          onClick={() => setClickedMenu("efsa")}
                          href="/services/efsa"
                        >
                          EFSA
                        </Link>
                      </p>
                      <p
                        id={`${clickedMenu !== "fssai" ? "hover-line" : ""}`}
                        className={`cursor-pointer !text-custom-beige`}
                      >
                        <Link
                          href="/services/fssai"
                          className={`
                        ${clickedMenu === "fssai" && borderLine}
                        `}
                          onClick={() => setClickedMenu("fssai")}
                        >
                          FSSAI
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id={`${clickedMenu !== "news" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <Link
                    href="/notice"
                    className={`
                  ${clickedMenu === "news" && borderLine}
                  `}
                    onClick={() => setClickedMenu("news")}
                  >
                    news
                  </Link>
                </div>
                <div
                  id={`${clickedMenu !== "faq" ? "hover-line" : ""}`}
                  className={`cursor-pointer ${
                    clickedMenu === "faq" && borderLine
                  }`}
                >
                  <Link href="/" onClick={() => setClickedMenu("faq")}>
                    faq
                  </Link>
                </div>
                <div
                  id={`${clickedMenu !== "contact" ? "hover-line" : ""}`}
                  className={`cursor-pointer`}
                >
                  <Link
                    href="/contact"
                    className={`
                  ${clickedMenu === "contact" && borderLine}
                  `}
                    onClick={() => setClickedMenu("contact")}
                  >
                    contact
                  </Link>
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
