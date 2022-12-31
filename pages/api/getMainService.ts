import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { MainService } from "../../typings";
import { groq } from "next-sanity";

const mainServiceQuery = groq`
  *[_type=="mainService"] {
  ...,
  categories->
  } | order(_createdAt asc)
`;

type Data = {
  service: MainService[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const service: MainService[] = await client.fetch(mainServiceQuery);
  res.status(200).json({ service });
}
