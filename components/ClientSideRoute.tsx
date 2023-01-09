"use client";
import { useAtom } from "jotai";
import { clickedMenuJotai } from "../libs/jotai";
import Link from "next/link";

const ClientSideRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  const [clickedMenu, setClickedMenu] = useAtom(clickedMenuJotai);
  return (
    <Link href={route} onClick={() => setClickedMenu("news")}>
      {children}
    </Link>
  );
};

export default ClientSideRoute;
