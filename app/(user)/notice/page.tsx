import NoticeList from "../../../components/news/NoticeList";
import { News } from "../../../typings";
import { client } from "../../../libs/sanity.client";
import { groq } from "next-sanity";

import { fetchNoticeList } from "../../../libs/fetchNoticeList";

type Props = {};

async function getNoticeList() {
  const data = await fetchNoticeList();
  return data;
}

export default async function Notice(props: Props) {
  //   const noticeListQuery = groq`
  //   *[_type=="news"] | order(_id) {
  //   _id,
  //   ...,
  //   categories->,
  //   author->,
  //   } | order(publishedAt desc)
  // `;
  //   const noticeList: News[] = await client.fetch(noticeListQuery);

  const list = await getNoticeList();
  return <NoticeList list={list} />;
}
