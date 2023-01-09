import ContactForm from "../../../components/contact/ContactForm";
import { groq } from "next-sanity";
import { client } from "../../../libs/sanity.client";
import { ContactPage } from "../../../typings";

import { fetchContactPage } from "../../../libs/fetchContactPage";
import { Suspense } from "react";
import Loader from "../../../components/Loader";

type Props = {};

async function getContact() {
  const data = await fetchContactPage();
  return data;
}

export default async function Contact(props: Props) {
  //   const contactPageQuery = groq`
  //   *[_type=="contact"] {
  //   _id,
  //     ...,
  //   }
  // `;

  //   const contact: ContactPage[] = await client.fetch(contactPageQuery);
  const contact = await getContact();
  return (
    <Suspense fallback={<Loader />}>
      <ContactForm contact={contact} />
    </Suspense>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// }
