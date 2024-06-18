import HeroSection from "@/components/sections/HeroSection";
import ParallaxTextTransition from "@/components/sections/ParallaxTextTransition";
import { parallaxTextItems1 } from "./constants";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <ParallaxTextTransition items={parallaxTextItems1} />
    </main>
  );
}
