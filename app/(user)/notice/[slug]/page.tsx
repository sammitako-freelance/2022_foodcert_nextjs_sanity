import groq from "groq";
import React from "react";
import NoticeItem from "../../../../components/news/NoticeItem";
import { client } from "../../../../libs/sanity.client";
import { News } from "../../../../typings";

type Props = {
  params: {
    slug: string;
  };
};

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
