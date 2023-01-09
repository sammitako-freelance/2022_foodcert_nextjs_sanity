import Loader from "../../../../components/Loader";
import { groq } from "next-sanity";
import React, { Suspense } from "react";
import About from "../../../../components/services/About";
import { client } from "../../../../libs/sanity.client";
import { ServicePage } from "../../../../typings";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type=='service'] {
      slug
    }
  `;
  const slugs: ServicePage[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Service({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='service' && slug.current == $slug][0] {
      ...,
      categories->,
    } 

  `;

  const service: ServicePage = await client.fetch(query, { slug });
  if (!service) {
    notFound();
  }

  return (
    <Suspense fallback={<Loader />}>
      <About service={service} />
    </Suspense>
  );
}
