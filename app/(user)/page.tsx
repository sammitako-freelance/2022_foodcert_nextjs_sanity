import { previewData } from "next/headers";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchMainHero } from "../../libs/fetchMainHero";
import { fetchMainService } from "../../libs/fetchMainService";
import { fetchMainNews } from "../../libs/fetchMainNews";
import { fetchCategories } from "../../libs/fetchCategories";
import { fetchMainFaq } from "../../libs/fetchMainFaq";
import { fetchMainContact } from "../../libs/fetchMainContact";

export const revalidate = 30;

export default async function Home() {
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
  const hero = await fetchMainHero();
  const service = await fetchMainService();
  const news = await fetchMainNews();
  const category = await fetchCategories();
  const faq = await fetchMainFaq();
  const contact = await fetchMainContact();

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
