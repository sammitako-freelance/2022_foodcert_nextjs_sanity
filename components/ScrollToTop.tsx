"use client";
import useScrollToggle from "../hooks/useScrollToggle";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const isScrolled = useScrollToggle(false);
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isScrolled ? (
    <button
      onClick={moveToTop}
      className="!fixed right-8 bottom-8 z-40 opacity-1 transition-all duration-300"
    >
      <ChevronDoubleUpIcon className="w-10 h-10 sm:w-12 sm:h-12 p-1 hover:shadow-md text-custom-black hover:bg-custom-black hover:text-custom-beige hover:rounded-full transition-all duration-300 ease-in-out" />
    </button>
  ) : (
    <button
      onClick={moveToTop}
      className="!fixed right-8 bottom-8 z-40 opacity-0 transition-all duration-300"
    >
      <ChevronDoubleUpIcon className="w-10 h-10 sm:w-12 sm:h-12 p-1 hover:shadow-md text-custom-black hover:bg-custom-black hover:text-custom-beige hover:rounded-full transition-all duration-300 ease-in-out" />
    </button>
  );
};

export default ScrollToTop;
