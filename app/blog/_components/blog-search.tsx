"use client";
import blogSearchQueryAtom from "@/atoms/blogSearchQueryAtom";
import { useAtom } from "jotai";
import { BiSearch } from "react-icons/bi";

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useAtom(blogSearchQueryAtom);

  return (
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
  );
}
