import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { FaqData } from "../../typings";
import { groq } from "next-sanity";

const mainFaqQuery = groq`
  *[_type=="faq"] {
  _id,
    ...,
  } | order(_createdAt asc)
`;

type Data = {
  faq: FaqData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const faq: FaqData[] = await client.fetch(mainFaqQuery);
  res.status(200).json({ faq });
}
