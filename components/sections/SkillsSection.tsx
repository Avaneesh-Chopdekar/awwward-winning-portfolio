import React from "react";
import HoverDevCards from "@/components/ui/hover-dev-cards";
import ChipTabs from "@/components/ui/chip-tabs";
import { tabs } from "@/app/constants/skills";

export default function SkillsSection() {
  return (
    <section className="mx-2 flex h-full min-h-screen flex-col items-center sm:mx-0 md:justify-center">
      <p className="mt-8 text-center text-4xl font-semibold md:mt-0 md:text-6xl">
        Skills
      </p>
      <ChipTabs tabs={tabs} />
      <HoverDevCards />
    </section>
  );
}
