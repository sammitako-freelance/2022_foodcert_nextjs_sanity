import ContactForm from "../../../components/contact/ContactForm";
import { groq } from "next-sanity";
import { client } from "../../../libs/sanity.client";
import { ContactPage } from "../../../typings";

import { fetchContactPage } from "../../../libs/fetchContactPage";
import { Suspense } from "react";
import Loader from "../../../components/Loader";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Script from "next/script";
import ScrollToTop from "../../../components/ScrollToTop";
import { fetchCategories } from "../../../libs/fetchCategories";

type Props = {};

export const revalidate = 30;
async function getContact() {
  const data = await fetchContactPage();
  return data;
}

async function getCategory() {
  const data = await fetchCategories();
  return data;
}

export default async function Contact(props: Props) {
  //   const contactPageQuery = groq`
  //   *[_type=="contact"] {
  //   _id,
  //     ...,
  //   }
  // `;

  //   const contact: ContactPage[] = await client.fetch(contactPageQuery);
  const contact = await getContact();
  const category = await getCategory();

  return (
    <Suspense fallback={<Loader />}>
      <Header category={category} />
      <ContactForm contact={contact} />
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

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// }
