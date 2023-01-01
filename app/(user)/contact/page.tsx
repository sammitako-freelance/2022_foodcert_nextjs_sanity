import ContactForm from "../../../components/contact/ContactForm";
import { fetchContactPage } from "../../../libs/fetchContactPage";

type Props = {};

export default async function Contact(props: Props) {
  const contact = await fetchContactPage();
  return <ContactForm contact={contact} />;
}
