"use client";

import { usePreview } from "../libs/sanity.preview";
import MainPageLayout from "./main/MainPageLayout";

type Props = {
  heroQuery: string;
  serviceQuery: string;
};

export default function PreviewMain({ heroQuery, serviceQuery }: Props) {
  const hero = usePreview(null, heroQuery);
  const service = usePreview(null, serviceQuery);
  return <MainPageLayout hero={hero} service={service} />;
}
