import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../libs/sanity.client";
import { ContactPage } from "../../typings";
import { groq } from "next-sanity";

const contactPageQuery = groq`
  *[_type=="contact"] {
  _id,
    ...,
  }
`;

type Data = {
  contact: ContactPage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contact: ContactPage = await client.fetch(contactPageQuery);
  res.status(200).json({ contact });
}
