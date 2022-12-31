import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { News } from "../../typings";
import { groq } from "next-sanity";

const noticeListQuery = groq`
  *[_type=="news"] {
  ...,
  categories->,
  author->,
  } | order(publishedAt desc)
`;

type Data = {
  noticeList: News[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const noticeList: News[] = await client.fetch(noticeListQuery);
  res.status(200).json({ noticeList });
}
