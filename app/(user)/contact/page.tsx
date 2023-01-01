// "use client";
import ContactForm from "../../../components/contact/ContactForm";
// import { fetchContactPage } from "../../../libs/fetchContactPage";

// type Props = {};

// export default async function Contact(props: Props) {
//   const contact = await fetchContactPage();
//   return <ContactForm contact={contact} />;
// }

import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return <ContactForm />;
};

export default Contact;
