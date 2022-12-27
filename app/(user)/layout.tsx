"use client";
import "../../styles/globals.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { clickedMenuJotai, isTopOfPageJotai } from "../../libs/jotai";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Header = dynamic(() => import("../../components/header"), {
    ssr: false,
  });
  const Footer = dynamic(() => import("../../components/footer"), {
    ssr: false,
  });
  const [isTopOfPage, setIsTopOfPage] = useAtom(isTopOfPageJotai);
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setClickedMenu("home");
      } else {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html>
      <body>
        <Header />
        <div className="h-body-height">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
