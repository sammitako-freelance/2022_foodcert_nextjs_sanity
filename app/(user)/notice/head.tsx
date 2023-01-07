import React from "react";

type Props = {};

const head = ({}: Props) => {
  const title = "News - House Boutique";
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </>
  );
};

export default head;
