import { FaqData } from "../typings";

export const fetchMainFaq = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainFaq`);
  const data = await res.json();
  const faq: FaqData[] = data.faq;

  return faq;
};
