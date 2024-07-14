"use client";
import { useAtomValue } from "jotai";

import { posts } from "@velite/content";
import blogSearchQueryAtom from "@/atoms/blogSearchQueryAtom";
import PostItem from "./post-item";
import { QueryPagination } from "./query-pagination";
import { sortPostsDescendingByDate } from "@/lib/utils";
import { POSTS_PER_PAGE } from "../page";

export default function BlogList({ currentPage = 1 }: { currentPage: number }) {
  const searchQuery = useAtomValue(blogSearchQueryAtom);

  const sortedPosts = sortPostsDescendingByDate(
    posts.filter((post) => post.published),
  );

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  return (
    <>
      {displayPosts?.length > 0 && searchQuery.length === 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => (
            <li key={post.slug}>
              <PostItem
                date={post.date}
                title={post.title}
                slug={post.slug}
                image={post.image}
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
                  image={post.image}
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
    </>
  );
}
