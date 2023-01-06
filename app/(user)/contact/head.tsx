import React from "react";

type Props = {};

const head = ({}: Props) => {
  const title = "Contact - House Boutique";
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/icons/favicon.ico" />
      <meta property="og:image" content="https://my-og-img.vercel.app/api/og" />
    </>
  );
};

export default head;
