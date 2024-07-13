import {
  parallaxTextItems1,
  parallaxTextItems2,
} from "./_constants/parallaxTextItems";
import {
  HeroSection,
  ParallaxTextTransition,
  SkillsSection,
  ProjectsSection,
  FAQsSection,
} from "@/app/_components/sections";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <ParallaxTextTransition items={parallaxTextItems1} />
      <SkillsSection />
      <ParallaxTextTransition items={parallaxTextItems2} />
      <ProjectsSection />
      <FAQsSection />
    </main>
  );
}
