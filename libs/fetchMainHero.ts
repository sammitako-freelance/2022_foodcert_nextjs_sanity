import { MainHero } from "../typings";

export const fetchMainHero = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainHero`
  );
  const data = await res.json();
  const hero: MainHero = data.hero;
  return hero;
};
