import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";

import { Post } from "@velite/content";
import { formatDate } from "@/lib/utils";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  image: string;
};

export default function PostItem({
  date,
  slug,
  title,
  description,
  image,
}: PostItemProps) {
  return (
    <div className="relative">
      <article className="peer flex flex-col gap-2 border-b py-3">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={slug}>{title}</Link>
          </h2>
        </div>
        <div className="line-clamp-2 max-w-none text-neutral-600 dark:text-neutral-400 md:line-clamp-3">
          {description}
        </div>
        <div className="flex items-center justify-between">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          {/* Had to ignore the read more link from tab index for repetitive visits on same link */}
          <Link
            href={slug}
            className="flex items-center hover:underline"
            tabIndex={-1}
          >
            Read More <BiRightArrowAlt />
          </Link>
        </div>
      </article>
      <Image
        src={`${image}`}
        alt={title}
        width={384}
        height={216}
        className="absolute -top-6 right-8 z-10 hidden aspect-video w-96 translate-x-8 rounded-md opacity-0 transition-all delay-150 duration-300 ease-in-out peer-hover:translate-x-0 peer-hover:opacity-100 md:block"
      />
    </div>
  );
}
