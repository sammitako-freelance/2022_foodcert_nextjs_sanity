import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { MainContact } from "../../typings";
import { groq } from "next-sanity";

const mainContactQuery = groq`
  *[_type=="mainContact"] {
  _id,
    ...,
  } | order(_createdAt asc)[0]
`;

type Data = {
  contact: MainContact;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contact: MainContact = await client.fetch(mainContactQuery);
  res.status(200).json({ contact });
}
