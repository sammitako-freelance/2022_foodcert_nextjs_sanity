import { previewData } from "next/headers";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchMainHero } from "../../libs/fetchMainHero";
import { fetchMainService } from "../../libs/fetchMainService";
import { fetchMainNews } from "../../libs/fetchMainNews";
import { fetchCategories } from "../../libs/fetchCategories";

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

  return (
    <div>
      <MainPageLayout
        hero={hero}
        service={service}
        news={news}
        category={category}
      />
    </div>
  );
}
