import NoticeList from "../../../components/news/NoticeList";
import { News } from "../../../typings";
import { client } from "../../../libs/sanity.client";
import { groq } from "next-sanity";

import { fetchNoticeList } from "../../../libs/fetchNoticeList";
import { Suspense } from "react";
import Loader from "../../../components/Loader";
import { notFound } from "next/navigation";

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
  if (!list) {
    notFound();
  }
  return (
    <Suspense fallback={<Loader />}>
      <NoticeList list={list} />
    </Suspense>
  );
}
