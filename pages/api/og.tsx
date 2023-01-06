import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/NotoSans-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function () {
  try {
    const fontData = await font;
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "#000231",
            color: "#F1F1E7",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"NotoSans',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                background: "#F1F1E7",
                width: "100px",
                height: "15px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>

            <div>House Boutique</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "NotoSans",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
