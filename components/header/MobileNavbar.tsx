import React, { useState } from "react";
import Link from "next/link";
import { isEmpty } from "lodash";
import {
  MdOutlineClose,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { clickedMenuJotai, showMenuJotai } from "../../libs/jotai";
import { useAtom } from "jotai";
import { headerMenus, subMenus } from "../../libs/header-menus";

const MobileNavbar = () => {
  if (isEmpty(headerMenus)) {
    return null;
  }
  const [subMenu, setSubmenu] = useState(false);
  const [show, setShow] = useAtom(showMenuJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  const chooseMenu = (name: any) => {
    setShow(false);
    setClickedMenu(name);
  };

  return (
    <>
      <header className="min-h-screen bg-black flex flex-col justify-center items-center uppercase font-bold font-Noto text-[#f1f1e7]">
        <div
          data-cy="nav-btn"
          className="right-4 top-2 absolute hover:cursor-pointer"
          onClick={() => setShow(false)}
        >
          <MdOutlineClose className="w-5 h-8 text-[#f1f1e7]" />
        </div>

        <ul className="text-center space-y-5">
          {headerMenus?.map((menu) => (
            <>
              <li key={menu?.title}>
                {menu.childItems == 0 ? (
                  <Link
                    href={
                      menu?.title.toLowerCase() == "home"
                        ? "/"
                        : `/${menu.slug}`
                    }
                  >
                    <div
                      data-cy="nav-item"
                      id={`${
                        clickedMenu != menu?.title.toLowerCase()
                          ? "hover-line"
                          : ""
                      }`}
                      className={`${
                        clickedMenu == menu?.title.toLowerCase()
                          ? "border-b-[3px] border-[#f1f1e7] inline-block"
                          : ""
                      }`}
                      onClick={() => chooseMenu(menu?.title.toLowerCase())}
                    >
                      {menu?.title}
                    </div>
                  </Link>
                ) : null}
                {menu.childItems > 0 ? (
                  <div className="flex flex-col">
                    <div className="flex items-center relative">
                      <div
                        id="hover-line"
                        className="hover:cursor-pointer"
                        onClick={() => setSubmenu(!subMenu)}
                      >
                        {menu?.title}
                      </div>

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
                    {subMenu ? (
                      <div className="mt-3 -mb-1 text-sm">
                        {menu.childItems > 0 ? (
                          <>
                            <ul className="text-center space-y-3">
                              {subMenus.map((item) => (
                                <li key={item.title}>
                                  <Link href={`/${item.slug}`}>
                                    <div
                                      id={`${
                                        clickedMenu != item.title.toLowerCase()
                                          ? "hover-line"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        chooseMenu(item.title.toLowerCase())
                                      }
                                    >
                                      {item.title}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </li>
            </>
          ))}
        </ul>
      </header>
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
