import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  clickedFaqJotai,
  clickedHomeJotai,
  clickedMenuJotai,
  clickedServiceJotai,
  showMenuJotai,
} from "../../libs/jotai";
import { useAtom } from "jotai";
import NewLink from "./NewLink";
import { useRouter } from "next/navigation";
import { Category } from "../../typings";
import Link from "next/link";

type Props = {
  category: Category[];
};
const MobileNavbar = ({ category }: Props) => {
  const borderLine = "border-b-[3px] border-[#f1f1e7] inline-block";
  const centerScreen = "min-h-screen flex justify-center items-center";
  const sideBar = "fixed right-0 bottom-0 z-40 h-full w-full drop-shadow-xl";
  const [subMenu, setSubmenu] = useState<boolean>(false);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const [clickedFaq, setClickedFaq] = useAtom(clickedFaqJotai);
  const [clickedService, setClickedService] = useAtom(clickedServiceJotai);
  const [clickedHome, setClickedHome] = useAtom(clickedHomeJotai);
  const router = useRouter();

  const chooseMenu = (name: string) => {
    setShow(false);
    setClickedMenu(name);
  };

  const pushPathAndScroll = (name: string, e: any) => {
    if (name === "service") {
      e.preventDefault();
      setShow(false);
      setClickedMenu(name);
      router.push("/");
      setClickedService(true);
    } else if (name === "faq") {
      e.preventDefault();
      setShow(false);
      setClickedMenu(name);
      router.push("/");
      setClickedFaq(true);
    } else if (name === "home") {
      e.preventDefault();
      setClickedMenu("home");
      router.push("/");
      setClickedHome(true);
    }
  };

  return (
    <>
      <nav
        className={`${sideBar} ${centerScreen} bg-custom-black uppercase font-bold text-center text-[#f1f1e7]`}
      >
        <div
          data-cy="nav-btn"
          className="right-7 top-6 hover:right-6 hover:top-7 fixed hover:cursor-pointer"
          onClick={() => setShow(false)}
        >
          <XMarkIcon className="w-8 h-8 text-[#f1f1e7] hover:x-7 hover:h-7" />
        </div>
        <div className="flex flex-col gap-6 uppercase">
          {/* HOME */}
          <div
            className={`cursor-pointer text-xl`}
            onClick={() => chooseMenu("home")}
          >
            <div id={`${clickedMenu !== "home" ? "hover-line" : ""}`}>
              <NewLink
                page="Home"
                clickedPage={clickedMenu}
                setClickedPage={setClickedMenu}
              />
            </div>
          </div>
          {/* SERVICE */}
          <div className="">
            <div
              className="cursor-pointer text-xl hover:opacity-70"
              onClick={() => setSubmenu(!subMenu)}
            >
              <div className="flex gap-1 items-center">
                <div className="self-start">services</div>
                {!subMenu ? (
                  <MdOutlineKeyboardArrowDown
                    className="text-[#f1f1e7] w-7 h-7 hover:cursor-pointer hover:opacity-80"
                    onClick={() => setSubmenu(!subMenu)}
                  />
                ) : (
                  <MdOutlineKeyboardArrowUp
                    className="text-[#f1f1e7] w-7 h-7 hover:cursor-pointer hover:opacity-80"
                    onClick={() => setSubmenu(!subMenu)}
                  />
                )}
              </div>
            </div>
            {/* SUB SERVICES */}
            {subMenu && (
              <div className="text-lg text-center flex flex-col gap-5 mt-5">
                {category.map((cat, idx) => (
                  <div
                    className={`cursor-pointer `}
                    onClick={() => chooseMenu(cat.title.toLowerCase())}
                  >
                    <div
                      id={`${
                        clickedMenu !== cat.title.toLowerCase()
                          ? "hover-line"
                          : ""
                      }`}
                    >
                      <Link
                        className={`${
                          clickedMenu === cat.title.toLowerCase()
                            ? borderLine
                            : ""
                        }`}
                        href={`/services/${cat.slug}`}
                        onClick={() => setClickedMenu(clickedMenu)}
                      >
                        {cat.title.toUpperCase()}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={`cursor-pointer text-xl`}
            onClick={() => chooseMenu("news")}
          >
            <div id={`${clickedMenu !== "news" ? "hover-line" : ""}`}>
              <NewLink
                page="News"
                clickedPage={clickedMenu}
                setClickedPage={setClickedMenu}
              />
            </div>
          </div>
          <div
            className={`cursor-pointer text-xl`}
            onClick={(e) => pushPathAndScroll("faq", e)}
          >
            <div id={`${clickedMenu !== "faq" ? "hover-line" : ""}`}>
              <NewLink
                page="Faq"
                clickedPage={clickedMenu}
                setClickedPage={setClickedMenu}
              />
            </div>
          </div>
          <div
            className={`cursor-pointer text-xl`}
            onClick={() => chooseMenu("contact")}
          >
            <div id={`${clickedMenu !== "contact" ? "hover-line" : ""}`}>
              <NewLink
                page="Contact"
                clickedPage={clickedMenu}
                setClickedPage={setClickedMenu}
              />
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

export default MobileNavbar;
