"use client";
import PostItem from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPostsDescendingByDate } from "@/lib/utils";
import { posts } from "@velite/content";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const POSTS_PER_PAGE = 5; // TODO: Make 10 when total blogs exceed 10

type BlogsPageProps = {
  searchParams: {
    page?: string;
  };
};

export default function BlogsPage({ searchParams }: BlogsPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPostsDescendingByDate(
    posts.filter((post) => post.published),
  );
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="container mx-auto max-w-4xl px-8 pb-6 pt-12 sm:px-0 lg:pb-10 lg:pt-20">
      <section className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h1 className="inline-block text-4xl font-bold lg:text-5xl">
            Avaneesh's Blog
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            I occasionally blog about my experiences and insights in coding and
            productivity.
          </p>
          <div className="flex w-full items-center rounded-full bg-neutral-200 px-4 dark:bg-neutral-800 md:w-1/2">
            <BiSearch size={20} />
            <input
              className="w-full rounded-r-full border-none bg-neutral-200 py-2 pl-2 outline-none placeholder:text-neutral-700 dark:bg-neutral-800 dark:placeholder:text-neutral-200"
              type="search"
              name="blog-search"
              id="blog-search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      <hr className="mt-8" />
      {displayPosts?.length > 0 && searchQuery.length === 0 ? (
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
      ) : searchQuery.length > 0 ? (
        <ul className="flex flex-col">
          {sortedPosts
            .filter((post) => {
              if (searchQuery.length === 0) {
                return post;
              } else if (
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description
                  ?.toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post) => (
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

      {searchQuery.length === 0 ? (
        <QueryPagination totalPages={totalPages} className="mt-16" />
      ) : null}
    </main>
  );
}
