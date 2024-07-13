import dynamic from "next/dynamic";
import Link from "next/link";

import ShimmerButton from "@/components/magicui/shimmer-button";
import SparklesText from "@/components/magicui/sparkles-text";
import LogoOrigami from "../logo-origami";

const WordRotate = dynamic(() => import("@/components/magicui/word-rotate"), {
  ssr: false,
});

export default function HeroSection() {
  const interestedInKeywords: string[] = [
    "Web Developement",
    "Mobile App Developement",
    "UI/UX Design",
    "Cloud Computing",
    "API Design",
    "Frontend Frameworks",
    "Backend Architectures",
  ];

  return (
    <main className="mt-8 flex h-screen flex-grow flex-col-reverse items-center justify-end md:mt-0 md:flex-row md:items-center md:justify-around">
      <div className="mx-8 flex flex-col items-start justify-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi! I&apos;m{" "}
          <SparklesText
            text="Avaneesh"
            className="inline-block"
            as={<span />}
            sparklesCount={6}
            colors={{ first: "#EECDA3", second: "#EF629F" }}
          />
        </h1>
        <p className="text-lg sm:text-xl">
          I&apos;m an eager software developer with a keen interest in
          <WordRotate words={interestedInKeywords} className="font-semibold" />
        </p>
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShimmerButton className="mt-6">View Resume</ShimmerButton>
        </Link>
      </div>
      <div className="mb-9 flex">
        <LogoOrigami />
      </div>
    </main>
  );
}
