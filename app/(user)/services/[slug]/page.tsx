import Loader from "../../../../components/Loader";
import { groq } from "next-sanity";
import React, { Suspense } from "react";
import About from "../../../../components/services/About";
import { client } from "../../../../libs/sanity.client";
import { ServicePage } from "../../../../typings";
import { notFound } from "next/navigation";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import Script from "next/script";
import { fetchCategories } from "../../../../libs/fetchCategories";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

async function getCategory() {
  const data = await fetchCategories();
  return data;
}

export async function generateStaticParams() {
  const query = groq`
    *[_type=='service'] {
      slug
    }
  `;
  const slugs: ServicePage[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug?.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Service({ params: { slug } }: Props) {
  const category = await getCategory();
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
      <Header category={category} />
      <About service={service} />
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
