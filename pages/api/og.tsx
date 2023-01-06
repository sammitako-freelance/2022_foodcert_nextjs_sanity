import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/NotoSans-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function () {
  const fontData = await font;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
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
              background: "black",
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
}
