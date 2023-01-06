import React from "react";

type Props = {
  params: { slug: string };
};

const head = ({ params }: Props) => {
  const firstChar = params.slug.charAt(0);
  const others = params.slug.slice(1);
  const title = params.slug.toUpperCase() + " - Services";
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/icons/favicon.ico" />
      <meta
        property="og:image"
        content="https://foodcert-nextjs-sanity-sammitako.vercel.app/api/og"
      />
    </>
  );
};

export default head;
