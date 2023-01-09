import React from "react";

type Props = {};

const head = ({}: Props) => {
  const title = "News - House Boutique";
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/icons/favicon.ico" />
    </>
  );
};

export default head;
