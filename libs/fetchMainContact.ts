import { MainContact } from "../typings";

export const fetchMainContact = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainContact`
  );
  const data = await res.json();
  const contact: MainContact = data.contact;

  return contact;
};
