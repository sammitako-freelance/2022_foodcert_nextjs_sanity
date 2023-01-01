import groq from "groq";
import React from "react";
import { getCliClient } from "sanity/cli";
import NoticeItem from "../../../../components/news/NoticeItem";
import { client } from "../../../../libs/sanity.client";
import { News } from "../../../../typings";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post'] {
      slug
    }
  `;
  const slugs: News[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function NewsItem({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='news' && slug.current == $slug][0] {
      ...,
      categories->,
      author->,
    } 

  `;
  const item: News = await client.fetch(query, { slug });
  return (
    <article>
      <NoticeItem data={item} />
    </article>
  );
}

export default NewsItem;
