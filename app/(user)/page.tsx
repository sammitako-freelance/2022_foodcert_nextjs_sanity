import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../libs/sanity.client";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchMainHero } from "../../libs/fetchMainHero";
import { fetchMainService } from "../../libs/fetchMainService";
import { fetchMainNews } from "../../libs/fetchMainNews";
import { fetchCategories } from "../../libs/fetchCategories";
import { fetchMainFaq } from "../../libs/fetchMainFaq";
import { fetchMainContact } from "../../libs/fetchMainContact";
import { fetchFooter } from "../../libs/fetchFooter";
import {
  MainHero,
  MainService,
  News,
  Category,
  FaqData,
  MainContact,
  // FooterSection,
} from "../../typings";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/ScrollToTop";
import Script from "next/script";
import { Suspense } from "react";
import Loader from "../../components/Loader";
import SvgLoader from "../../components/SvgLoader";
import dynamic from "next/dynamic";

export const revalidate = 30;

async function getHero() {
  const data = await fetchMainHero();
  return data;
}

async function getService() {
  const data = await fetchMainService();
  return data;
}

async function getNews() {
  const data = await fetchMainNews();
  return data;
}

async function getCategory() {
  const data = await fetchCategories();
  return data;
}

async function getFaq() {
  const data = await fetchMainFaq();
  return data;
}

async function getContact() {
  const data = await fetchMainContact();
  return data;
}

// async function getFooter() {
//   const data = await fetchFooter();
//   return data;
// }

export default async function Home() {
  const hero = await getHero();
  const service = await getService();
  const news = await getNews();
  const category = await getCategory();
  const faq = await getFaq();
  const contact = await getContact();
  // const footer = await getFooter();

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-custom-black">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        Preview mode
      </PreviewSuspense>
    );
  }

  // if (document.referrer == location.href) {
  //   // the page was opened in a new window or tab and accessed directly
  // } else if (document.referrer.indexOf(location.hostname) == -1) {
  //   // The page before this one was not a page on this site
  // }

  //   const heroQuery = groq`
  //   *[_type=="mainHero"] {
  //   _id,
  //     ...,
  //   } | order(_createdAt desc)
  // `;
  //   const hero: MainHero[] = await client.fetch(heroQuery);

  //   const serviceQuery = groq`
  //   *[_type=="mainService"] {
  //   ...,
  //   categories->
  //   } | order(_createdAt asc)
  // `;
  //   const service: MainService[] = await client.fetch(serviceQuery);

  //   const newsQuery = groq`
  // *[_type=="news"] {
  // ...,
  // categories->,
  // author->
  // } | order(publishedAt desc) [0...5]
  // `;
  //   const news: News[] = await client.fetch(newsQuery);

  //   const categoriesQuery = groq`
  // *[_type=="category"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)
  // `;
  //   const category: Category[] = await client.fetch(categoriesQuery);

  //   const faqQuery = groq`
  // *[_type=="faq"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)
  // `;
  //   const faq: FaqData[] = await client.fetch(faqQuery);

  //   const contactQuery = groq`
  // *[_type=="mainContact"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)[0]
  // `;
  //   const contact: MainContact = await client.fetch(contactQuery);

  return (
    <>
      <Header category={category} />
      <MainPageLayout
        hero={hero}
        service={service}
        news={news}
        category={category}
        faq={faq}
        contact={contact}
      />
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
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// }
