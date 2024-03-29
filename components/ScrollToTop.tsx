"use client";
import useScrollToggle from "../hooks/useScrollToggle";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../libs/jotai";

const ScrollToTop = () => {
  const currentPath = usePathname();
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  const isScrolled = useScrollToggle(false);
  const moveToTop = () => {
    if (currentPath === "/") {
      setClickedMenu("home");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // right-8 xs:right-7 bottom-24
  // right-8 xs:right-7 bottom-10

  return isScrolled ? (
    <button
      onClick={moveToTop}
      className="!fixed right-[15px] bottom-[4.5rem] xs:right-[29px] xs:bottom-24 z-40 opacity-1 transition-all duration-300"
    >
      <ChevronDoubleUpIcon className="w-10 h-10 xs:w-12 xs:h-12 p-1 hover:shadow-md text-custom-black hover:bg-custom-black hover:text-custom-beige hover:rounded-full transition-all duration-300 ease-in-out" />
    </button>
  ) : (
    <button
      onClick={moveToTop}
      className="!fixed right-[15px] bottom-4 xs:right-[29px] xs:bottom-[10px] z-40 opacity-0 transition-all duration-300"
    >
      <ChevronDoubleUpIcon className="w-10 h-10 xs:w-12 xs:h-12 p-1 hover:shadow-md text-custom-black hover:bg-custom-black hover:text-custom-beige hover:rounded-full transition-all duration-300 ease-in-out" />
    </button>
  );
};

export default ScrollToTop;
