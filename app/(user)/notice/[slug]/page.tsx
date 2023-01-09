import groq from "groq";
import React, { Suspense } from "react";
import NoticeItem from "../../../../components/news/NoticeItem";
import { client } from "../../../../libs/sanity.client";
import { News } from "../../../../typings";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Loader from "../../../../components/Loader";
import { notFound } from "next/navigation";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Script from "next/script";
import ScrollToTop from "../../../../components/ScrollToTop";

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
      <Header />
      <NoticeItem data={item} />
      <Footer />
      <ScrollToTop />
      <Script
        id="channelTalk"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function() {
              var w = window;
              if (w.ChannelIO) {
                return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
              }
              var ch = function() {
                ch.c(arguments);
              };
              ch.q = [];
              ch.c = function(args) {
                ch.q.push(args);
              };
              w.ChannelIO = ch;
              function l() {
                if (w.ChannelIOInitialized) {
                  return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
              }
              if (document.readyState === 'complete') {
                l();
              } else if (window.attachEvent) {
                window.attachEvent('onload', l);
              } else {
                window.addEventListener('DOMContentLoaded', l, false);
                window.addEventListener('load', l, false);
              }
            })();
            ChannelIO('boot', {
              "pluginKey": "${process.env.NEXT_PUBLIC_CHANNEL_IO_KEY}"
            });
            `,
        }}
      />
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
