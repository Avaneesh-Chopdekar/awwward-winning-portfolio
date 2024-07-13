import "@/styles/mdx.css";
import { Metadata } from "next/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";

import { posts } from "@velite/content";
import MdxComponent from "../_components/mdx-component";

type BlogDetailProps = {
  params: { slug: string[] };
};

async function getPostFromParams(params: BlogDetailProps["params"]) {
  const slug = params?.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogDetailProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);
  ogSearchParams.set("description", post.description ?? "");

  return {
    title: post.title,
    description: post.description,
    authors: { name: "Avaneesh Chopdekar" },
    keywords: ["blog", "coding", "programming"],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container prose mx-auto mt-2 max-w-3xl px-8 py-6 dark:prose-invert lg:prose-xl sm:px-0">
      <Link href="/blog" className="mb-8 flex items-center gap-2 no-underline">
        <BiLeftArrowAlt size={22} /> Back
      </Link>
      <h1 className="mb-2 hover:text-blue-500 hover:underline">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-xl text-neutral-600 dark:text-neutral-400">
          {post.description}
        </p>
      ) : null}
      <hr className="my-4" />
      <MdxComponent code={post.body} />
    </article>
  );
}
