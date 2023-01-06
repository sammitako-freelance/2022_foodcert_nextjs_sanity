import React from "react";

type Props = {
  params: { slug: string };
};

const head = ({ params }: Props) => {
  const title = params.slug;
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/icons/favicon.ico" />
      {/* PRIMARY META TAG */}
      <meta name="title" content="Foodcert - House Boutique" />
      <meta
        name="description"
        content="Beauty & Health | 최고의 해외 진출 파트너 House Boutique"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://foodcert-nextjs-sanity-h9khs4d5h-sammitako.vercel.app/"
      />
      <meta property="og:title" content="Foodcert - House Boutique" />
      <meta
        property="og:description"
        content="Beauty & Health | 최고의 해외 진출 파트너 House Boutique"
      />
      <meta
        property="og:image"
        content="https://foodcert-nextjs-sanity-sammitako.vercel.app/api/og"
      />

      {/* TWITTER */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://foodcert-nextjs-sanity-h9khs4d5h-sammitako.vercel.app/"
      />
      <meta property="twitter:title" content="Foodcert - House Boutique" />
      <meta
        property="twitter:description"
        content="Beauty & Health | 최고의 해외 진출 파트너 House Boutique"
      />
      <meta
        property="twitter:image"
        content="https://foodcert-nextjs-sanity-sammitako.vercel.app/api/og"
      />
    </>
  );
};

export default head;
