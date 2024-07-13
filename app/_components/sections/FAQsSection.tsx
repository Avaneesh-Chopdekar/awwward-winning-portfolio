import React from "react";
import RadixAccordion from "../ui/radix-accordian";
import { faqs } from "@/app/_constants/faqs";
import Link from "next/link";
import { Button } from "../../../components/ui/shadcn-button";

export default function FAQsSection() {
  const sectionName = "Frequently Asked Questions";
  return (
    <section className="mx-2 flex h-full min-h-screen flex-col items-center sm:mx-0 md:justify-center">
      <p
        className="mt-8 text-center text-4xl font-semibold md:mt-0 md:text-6xl"
        title={sectionName}
        aria-label={sectionName}
      >
        FAQs
      </p>
      <RadixAccordion items={faqs} />
      <Link href="/chat" className="mb-16 mt-8">
        <Button variant="outline">Know more about me</Button>
      </Link>
    </section>
  );
}
