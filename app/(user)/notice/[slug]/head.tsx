import React from "react";

type Props = {
  params: { slug: string };
};

const head = ({ params }: Props) => {
  const title = params.slug + " - News";
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/icons/favicon.ico" />
    </>
  );
};

export default head;
