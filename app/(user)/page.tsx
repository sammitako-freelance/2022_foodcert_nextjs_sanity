import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../libs/sanity.client";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchMainHero } from "../../libs/fetchMainHero";
import { fetchMainService } from "../../libs/fetchMainService";
import { fetchMainNews } from "../../libs/fetchMainNews";
import { fetchCategories } from "../../libs/fetchCategories";
import { fetchMainFaq } from "../../libs/fetchMainFaq";
import { fetchMainContact } from "../../libs/fetchMainContact";
import {
  MainHero,
  MainService,
  News,
  Category,
  FaqData,
  MainContact,
} from "../../typings";

export const revalidate = 30;

async function getHero() {
  const data = await fetchMainHero();
  return data;
}

async function getService() {
  const data = await fetchMainService();
  return data;
}

async function getNews() {
  const data = await fetchMainNews();
  return data;
}

async function getCategory() {
  const data = await fetchCategories();
  return data;
}

async function getFaq() {
  const data = await fetchMainFaq();
  return data;
}

async function getContact() {
  const data = await fetchMainContact();
  return data;
}

export default async function Home() {
  const hero = await getHero();
  const service = await getService();
  const news = await getNews();
  const category = await getCategory();
  const faq = await getFaq();
  const contact = await getContact();

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-custom-black">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        Preview mode
      </PreviewSuspense>
    );
  }

  //   const heroQuery = groq`
  //   *[_type=="mainHero"] {
  //   _id,
  //     ...,
  //   } | order(_createdAt desc)
  // `;
  //   const hero: MainHero[] = await client.fetch(heroQuery);

  //   const serviceQuery = groq`
  //   *[_type=="mainService"] {
  //   ...,
  //   categories->
  //   } | order(_createdAt asc)
  // `;
  //   const service: MainService[] = await client.fetch(serviceQuery);

  //   const newsQuery = groq`
  // *[_type=="news"] {
  // ...,
  // categories->,
  // author->
  // } | order(publishedAt desc) [0...5]
  // `;
  //   const news: News[] = await client.fetch(newsQuery);

  //   const categoriesQuery = groq`
  // *[_type=="category"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)
  // `;
  //   const category: Category[] = await client.fetch(categoriesQuery);

  //   const faqQuery = groq`
  // *[_type=="faq"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)
  // `;
  //   const faq: FaqData[] = await client.fetch(faqQuery);

  //   const contactQuery = groq`
  // *[_type=="mainContact"] {
  // _id,
  //   ...,
  // } | order(_createdAt asc)[0]
  // `;
  //   const contact: MainContact = await client.fetch(contactQuery);

  return (
    <div>
      <MainPageLayout
        hero={hero}
        service={service}
        news={news}
        category={category}
        faq={faq}
        contact={contact}
      />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// }
