import PostItem from "@/components/post-item";
import { sortPostsDescendingByDate } from "@/lib/utils";
import { posts } from "@velite/content";

export default function BlogsPage() {
  const sortedPosts = sortPostsDescendingByDate(
    posts.filter((post) => post.published),
  );
  const displayPosts = sortedPosts;
  return (
    <main className="container mx-auto max-w-4xl py-6 lg:py-10">
      <section className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold lg:text-5xl">Blog</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            I occasionally blog about my experiences and insights in coding and
            productivity.
          </p>
        </div>
      </section>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => (
            <li key={post.slug}>
              <PostItem
                date={post.date}
                title={post.title}
                slug={post.slug}
                description={post.description ?? ""}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No blog posts yet.</p>
      )}
    </main>
  );
}
