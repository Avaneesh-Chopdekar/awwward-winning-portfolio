import HeroSection from "@/components/sections/HeroSection";
import ParallaxTextTransition from "@/components/sections/ParallaxTextTransition";
import {
  parallaxTextItems1,
  parallaxTextItems2,
} from "./constants/parallaxTextItems";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <ParallaxTextTransition items={parallaxTextItems1} />
      <SkillsSection />
      <ParallaxTextTransition items={parallaxTextItems2} />
      <div className="h-screen"></div>
    </main>
  );
}
