import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

// TODO: Later add tags below description

const interBold = fetch(
  new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center justify-center">
            <p tw="ml-2 font-bold text-2xl">Avaneesh Chopdekar</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{title}</div>
            {description && description.length > 0 ? (
              <div tw="flex line-clamp-3 text-neutral-500 mt-4 text-2xl">
                {description}
              </div>
            ) : null}
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">avaneesh-chopdekar.netlify.app</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">github.com/Avaneesh-Chopdekar</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
