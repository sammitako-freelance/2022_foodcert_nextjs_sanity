import { ContactPage } from "../typings";

export const fetchContactPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getContactPage`
  );
  const data = await res.json();
  const contact: ContactPage = data.contact;

  return contact;
};
