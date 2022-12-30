import { previewData } from "next/headers";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchMainHero } from "../../libs/fetchMainHero";

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
  return (
    <div>
      <MainPageLayout hero={hero} />
    </div>
  );
}
