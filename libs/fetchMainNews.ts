import { News } from "../typings";

export const fetchMainNews = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainNews`
  );
  const data = await res.json();
  const mainNews: News[] = data.mainNews;

  return mainNews;
};
