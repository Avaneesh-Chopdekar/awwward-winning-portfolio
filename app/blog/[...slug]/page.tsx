import MdxComponent from "@/components/mdx-component";
import { posts } from "@velite/content";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

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

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container prose mx-auto mt-2 max-w-3xl py-6 dark:prose-invert lg:prose-xl">
      <Link href="/blog" className="mb-8 flex items-center gap-2 no-underline">
        <BiLeftArrowAlt size={22} /> Back
      </Link>
      <h1 className="mb-2">{post.title}</h1>
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
