import { previewData } from "next/headers";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";
import { MainHero } from "../../typings";

interface Props {
  hero: MainHero;
}
export default async function Home({ hero }: Props) {
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
  return (
    <div>
      <MainPageLayout hero={hero} />
    </div>
  );
}
