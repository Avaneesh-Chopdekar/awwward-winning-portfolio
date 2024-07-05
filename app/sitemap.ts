import { MetadataRoute } from "next";
import { posts } from "@velite/content";
import { sortPostsDescendingByDate } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sortedPosts = sortPostsDescendingByDate(
    posts.filter((post) => post.published),
  );

  const postEntries: MetadataRoute.Sitemap = sortedPosts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/chat`,
    },
    ...postEntries,
  ];
}
