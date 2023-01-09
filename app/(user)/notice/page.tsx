import NoticeList from "../../../components/news/NoticeList";
import { News } from "../../../typings";
import { client } from "../../../libs/sanity.client";
import { groq } from "next-sanity";

import { fetchNoticeList } from "../../../libs/fetchNoticeList";
import { Suspense } from "react";
import Loader from "../../../components/Loader";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Script from "next/script";
import ScrollToTop from "../../../components/ScrollToTop";

type Props = {};

async function getNoticeList() {
  const data = await fetchNoticeList();
  return data;
}

export default async function Notice(props: Props) {
  //   const noticeListQuery = groq`
  //   *[_type=="news"] | order(_id) {
  //   _id,
  //   ...,
  //   categories->,
  //   author->,
  //   } | order(publishedAt desc)
  // `;
  //   const noticeList: News[] = await client.fetch(noticeListQuery);

  const list = await getNoticeList();
  if (!list) {
    notFound();
  }
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <NoticeList list={list} />
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
