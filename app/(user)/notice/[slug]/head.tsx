import React from "react";

type Props = {
  params: { slug: string };
};

const head = ({ params }: Props) => {
  const title = params.slug;
  return <title>{title}</title>;
};

export default head;
