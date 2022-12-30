import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { MainHero } from "../../typings";
import { groq } from "next-sanity";

const mainHeroQuery = groq`
  *[_type=="mainHero"] {
  _id,
    ...,
  } | order(_createdAt desc)
`;

type Data = {
  hero: MainHero;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hero: MainHero = await client.fetch(mainHeroQuery);
  res.status(200).json({ hero });
}
