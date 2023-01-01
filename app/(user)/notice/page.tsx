import NoticeList from "../../../components/news/NoticeList";
import { fetchNoticeList } from "../../../libs/fetchNoticeList";

type Props = {};

export default async function Notice(props: Props) {
  const list = await fetchNoticeList();
  return <NoticeList list={list} />;
}
