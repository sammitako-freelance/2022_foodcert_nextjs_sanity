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
    </>
  );
};

export default head;
