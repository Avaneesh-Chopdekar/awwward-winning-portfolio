import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

export default function PostItem({
  date,
  slug,
  title,
  description,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-neutral-600 dark:text-neutral-400">
        {description}
      </div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link href={slug} className="flex items-center hover:underline">
          Read More <BiRightArrowAlt />
        </Link>
      </div>
    </article>
  );
}
