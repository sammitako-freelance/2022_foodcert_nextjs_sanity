import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { Category } from "../../typings";
import { groq } from "next-sanity";

const categoryQuery = groq`
  *[_type=="category"] {
  _id,
    ...,
  } | order(_createdAt asc)
`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories: Category[] = await client.fetch(categoryQuery);
  res.status(200).json({ categories });
}
