"use client";
import "../../styles/globals.css";
// import dynamic from "next/dynamic";
import ScrollToTop from "../../components/ScrollToTop";
// import ChannelTalk from "../../components/ChannelTalk";
import Script from "next/script";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { NextSeo } from "next-seo";
import { Suspense } from "react";
import Loader from "../../components/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const Header = dynamic(() => import("../../components/header"), {
  //   ssr: false,
  // });
  // const Footer = dynamic(() => import("../../components/footer"), {
  //   ssr: false,
  // });

  return (
    <html>
      <body>
        <Header />
        {/* <div className="h-body-height">{children}</div> */}
        {/* page.tsx */}
        <Suspense fallback={<Loader />}>
          <div>{children}</div>
        </Suspense>
        {/* <ChannelTalk /> */}
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
        <Footer />
      </body>
    </html>
  );
}
