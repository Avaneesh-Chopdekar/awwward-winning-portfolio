import React from "react";
import { IconType } from "react-icons";
import { socials } from "@/app/_constants/socials";
import StickyIcon from "../ui/sticky-icon";
import Link from "next/link";

export type SocialsLinkType = {
  label: string;
  icon: IconType;
  url: string;
  color: string;
};

export default function FooterSection() {
  return (
    <footer className="my-8 md:my-4">
      <p className="mb-10 text-center text-lg font-semibold text-neutral-800 dark:text-neutral-300 md:text-xl">
        Made by Avaneesh Chopdekar
      </p>
      <div className="flex items-center justify-evenly gap-2">
        {socials.map((social) => (
          <StickyIcon key={social.url}>
            <Link
              href={social.url}
              title={social.label}
              aria-label={social.label}
            >
              <social.icon
                className={`text-2xl text-neutral-500 transition-colors delay-100 ease-in-out sm:text-3xl`}
                color={social.color}
              />
            </Link>
          </StickyIcon>
        ))}
      </div>
    </footer>
  );
}
