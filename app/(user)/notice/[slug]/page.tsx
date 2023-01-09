import groq from "groq";
import React, { Suspense } from "react";
import NoticeItem from "../../../../components/news/NoticeItem";
import { client } from "../../../../libs/sanity.client";
import { News } from "../../../../typings";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Loader from "../../../../components/Loader";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  // item: News;
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
      "fileURL": file[].asset->url,
      "imageURL": imageFile[].asset->url,
    }

  `;
  const item: News = await client.fetch(query, { slug });

  // const router = useRouter();
  // if (!router.isFallback && !slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  if (!item) {
    notFound();
  }

  return (
    <Suspense fallback={<Loader />}>
      <NoticeItem data={item} />
    </Suspense>
  );
}

// export default function NewsItem({ item }: Props) {
//   return (
//     <article>
//       <NoticeItem data={item} />
//     </article>
//   );
// }

export default NewsItem;

// export async function getStaticPaths() {
//   const query = groq`
//     *[_type=='post'] {
//       slug
//     }
//   `;
//   const slugs: News[] = await client.fetch(query);
//   const slugRoutes = slugs.map((slug) => slug.slug.current);
//   const path = slugRoutes.map((slug) => ({
//     slug,
//   }));
//   return {
//     path,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }: Props) {
//   const query = groq`
//     *[_type=='news' && slug.current == $slug][0] {
//       ...,
//       categories->,
//       author->,
//     }

//   `;
//   const item: News = await client.fetch(query, { slug });
//   return {
//     props: {
//       item,
//     },
//   };
// }
