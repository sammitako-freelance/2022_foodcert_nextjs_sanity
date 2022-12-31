import { News } from "../typings";

export const fetchNoticeList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNoticeList`
  );
  const data = await res.json();
  const noticeList: News[] = data.noticeList;

  return noticeList;
};
