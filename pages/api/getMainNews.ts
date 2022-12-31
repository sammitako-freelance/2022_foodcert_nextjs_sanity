import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { News } from "../../typings";
import { groq } from "next-sanity";

const mainNewsQuery = groq`
  *[_type=="news"] {
  ...,
  categories->,
  author->
  } | order(publishedAt desc) [0...5]
`;

type Data = {
  mainNews: News[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mainNews: News[] = await client.fetch(mainNewsQuery);
  res.status(200).json({ mainNews });
}
