"use client";

import { usePreview } from "../libs/sanity.preview";
import MainPageLayout from "./main/MainPageLayout";

type Props = {
  query: string;
};

export default function PreviewMain({ query }: Props) {
  const hero = usePreview(null, query);
  return <MainPageLayout hero={hero} />;
}
