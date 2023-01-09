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
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
