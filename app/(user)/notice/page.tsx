import NoticeList from "../../../components/news/NoticeList";
import { fetchNoticeList } from "../../../libs/fetchNoticeList";

type Props = {};

export default async function Notice(props: Props) {
  const list = await fetchNoticeList();
  console.log(list.length);
  return <NoticeList list={list} />;
}
