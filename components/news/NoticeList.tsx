import React from "react";
import { News } from "../../typings";

type Props = {
  list: News[];
};

const NoticeList = ({ list }: Props) => {
  console.log(list);
  return <div>NoticeList</div>;
};

export default NoticeList;
