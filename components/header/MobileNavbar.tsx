import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { clickedMenuJotai, showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import NewLink from "./NewLink";

const MobileNavbar = () => {
  const centerScreen = "min-h-screen flex justify-center items-center";
  const sideBar = "fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl";
  const [subMenu, setSubmenu] = useState<boolean>(false);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  const chooseMenu = (name: string) => {
    setShow(false);
    setClickedMenu(name);
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
        <div className="flex flex-col gap-3">
          <div
            id={`${clickedMenu != "home" ? "hover-line" : ""}`}
            className={`cursor-pointer text-lg`}
            onClick={() => chooseMenu("home")}
          >
            <NewLink
              page="Home"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>
          <div
            id={`${clickedMenu != "services" ? "hover-line" : ""}`}
            className="relative flex items-center cursor-pointer text-lg"
            onClick={() => setSubmenu(!subMenu)}
          >
            <NewLink
              page="Services"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
            <div className="absolute top-[4px] -right-8">
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
          {subMenu && (
            <div className="text-base text-center flex flex-col gap-2">
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
            className={`cursor-pointer text-lg`}
            onClick={() => chooseMenu("news")}
          >
            <NewLink
              page="News"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>
          <div
            id={`${clickedMenu != "faq" ? "hover-line" : ""}`}
            className={`cursor-pointer text-lg`}
            onClick={() => chooseMenu("faq")}
          >
            <NewLink
              page="Faq"
              clickedPage={clickedMenu}
              setClickedPage={setClickedMenu}
            />
          </div>
          <div
            id={`${clickedMenu != "contact" ? "hover-line" : ""}`}
            className={`cursor-pointer text-lg`}
            onClick={() => chooseMenu("contact")}
          >
            <NewLink
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
