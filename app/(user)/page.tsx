import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../libs/sanity.client";
import MainPageLayout from "../../components/main/MainPageLayout";
import PreviewSuspense from "../../components/PreviewSuspense";

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

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
  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div>
      <MainPageLayout />
    </div>
  );
}
