"use client";

import { usePreview } from "../libs/sanity.preview";
import MainPageLayout from "./main/MainPageLayout";

type Props = {
  heroQuery: string;
  serviceQuery: string;
  newsQuery: string;
  categoryQuery: string;
};

export default function PreviewMain({
  heroQuery,
  serviceQuery,
  newsQuery,
  categoryQuery,
}: Props) {
  const hero = usePreview(null, heroQuery);
  const service = usePreview(null, serviceQuery);
  const news = usePreview(null, newsQuery);
  const category = usePreview(null, categoryQuery);

  return (
    <MainPageLayout
      hero={hero}
      service={service}
      news={news}
      category={category}
    />
  );
}
