"use client";

import { usePreview } from "../libs/sanity.preview";
import MainPageLayout from "./main/MainPageLayout";

type Props = {
  heroQuery: string;
  serviceQuery: string;
  newsQuery: string;
  categoryQuery: string;
  faqQuery: string;
  contactQuery: string;
};

export default function PreviewMain({
  heroQuery,
  serviceQuery,
  newsQuery,
  categoryQuery,
  faqQuery,
  contactQuery,
}: Props) {
  const hero = usePreview(null, heroQuery);
  const service = usePreview(null, serviceQuery);
  const news = usePreview(null, newsQuery);
  const category = usePreview(null, categoryQuery);
  const faq = usePreview(null, faqQuery);
  const contact = usePreview(null, contactQuery);

  return (
    <MainPageLayout
      hero={hero}
      service={service}
      news={news}
      category={category}
      faq={faq}
      contact={contact}
    />
  );
}
