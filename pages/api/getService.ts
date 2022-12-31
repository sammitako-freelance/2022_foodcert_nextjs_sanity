import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { ServicePage } from "../../typings";
import { groq } from "next-sanity";

const serviceQuery = groq`
  *[_type=="service"] {
  ...,
  categories->,
  } | order(_createdAt asc)
`;

type Data = {
  service: ServicePage[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const service: ServicePage[] = await client.fetch(serviceQuery);
  res.status(200).json({ service });
}
