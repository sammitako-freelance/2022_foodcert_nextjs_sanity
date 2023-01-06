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
      <meta property="og:image" content="https://my-og-img.vercel.app/api/og" />
    </>
  );
};

export default head;
