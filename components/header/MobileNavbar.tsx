import React, { useState } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { clickedMenuJotai, showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import ScrollLink from "../main/ScrollLink";

type Props = {
  isTopOfPage: boolean;
};

const MobileNavbar = ({ isTopOfPage }: Props) => {
  const centerScreen = "min-h-screen flex justify-center items-center";
  const sideBar = "fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl";
  const [subMenu, setSubmenu] = useState<boolean>(false);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  const chooseMenu = (name: string) => {
    setShow(false);
    setClickedMenu(name);
  };
  const navbarBackground = isTopOfPage
    ? "text-black"
    : "bg-[#243665] drop-shadow";
  return (
    <>
      <nav
        className={`${sideBar} ${centerScreen} ${navbarBackground} bg-black uppercase font-bold text-center text-[#f1f1e7]`}
      >
        <div
          data-cy="nav-btn"
          className="right-7 top-6 fixed hover:cursor-pointer"
          onClick={() => setShow(false)}
        >
          <XMarkIcon className="w-8 h-8 text-[#f1f1e7] hover:text-gray-200" />
        </div>
        <div className="flex flex-col gap-3">
          <div
            id={`${clickedMenu != "home" ? "hover-line" : ""}`}
            className={`cursor-pointer`}
            onClick={() => chooseMenu("home")}
          >
            <ScrollLink
              page="Home"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>

          <div
            id={`${clickedMenu != "about" ? "hover-line" : ""}`}
            className={`cursor-pointer`}
            onClick={() => chooseMenu("about")}
          >
            <ScrollLink
              page="About"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>
          <div
            id={`${clickedMenu != "services" ? "hover-line" : ""}`}
            className="relative flex items-center cursor-pointer"
            onClick={() => {
              setSubmenu(!subMenu);
            }}
          >
            <ScrollLink
              page="Services"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
            <div className="absolute top-0 -right-6">
              {!subMenu ? (
                <MdOutlineKeyboardArrowDown
                  className="text-[#f1f1e7] w-5 h-6 hover:cursor-pointer hover:opacity-80"
                  onClick={() => setSubmenu(!subMenu)}
                />
              ) : (
                <MdOutlineKeyboardArrowUp
                  className="text-[#f1f1e7] w-5 h-6 hover:cursor-pointer hover:opacity-80"
                  onClick={() => setSubmenu(!subMenu)}
                />
              )}
            </div>
          </div>
          {subMenu && (
            <div className="text-sm text-center flex flex-col gap-2">
              <div
                id={`${clickedMenu != "efsa" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
                onClick={() => chooseMenu("efsa")}
              >
                EFSA
              </div>
              <div
                id={`${clickedMenu != "fssai" ? "hover-line" : ""}`}
                className={`cursor-pointer`}
                onClick={() => chooseMenu("fssai")}
              >
                FSSAI
              </div>
            </div>
          )}
          <div
            id={`${clickedMenu != "news" ? "hover-line" : ""}`}
            className={`cursor-pointer`}
            onClick={() => chooseMenu("news")}
          >
            <ScrollLink
              page="News"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>
          <div
            id={`${clickedMenu != "contact" ? "hover-line" : ""}`}
            className={`cursor-pointer`}
            onClick={() => chooseMenu("contact")}
          >
            <ScrollLink
              page="Contact"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
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
