import ContactForm from "../../../components/contact/ContactForm";
import { groq } from "next-sanity";
import { client } from "../../../libs/sanity.client";
import { ContactPage } from "../../../typings";
import { GetStaticProps } from "next";
import Head from "next/head";

// import { fetchContactPage } from "../../../libs/fetchContactPage";

type Props = {};

export default async function Contact(props: Props) {
  const contactPageQuery = groq`
  *[_type=="contact"] {
  _id,
    ...,
  }
`;

  const contact: ContactPage[] = await client.fetch(contactPageQuery);
  // const contact = await fetchContactPage();
  return (
    <div>
      <ContactForm contact={contact} />
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// }
