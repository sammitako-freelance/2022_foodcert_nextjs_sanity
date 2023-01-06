import React from "react";

type Props = {
  params: { slug: string };
};

const head = ({ params }: Props) => {
  const firstChar = params.slug.charAt(0);
  const others = params.slug.slice(1);
  const title = params.slug.toUpperCase() + " - Services";
  return <title>{title}</title>;
};

export default head;
