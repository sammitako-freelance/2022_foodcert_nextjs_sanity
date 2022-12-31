import React from "react";

type Props = {
  number: number;
  title: string;
  subTitle: string;
};

const DocumentList = ({ number, title, subTitle }: Props) => {
  return (
    <div className="py-5 space-y-2">
      <div className="text-xs font-bold text-custom-blue">0{number}.</div>
      <div>{title}</div>
      <div className="text-xs text-custom-dark-gray">{subTitle}</div>
    </div>
  );
};

export default DocumentList;
