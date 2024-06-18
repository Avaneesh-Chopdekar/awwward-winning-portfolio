"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

export type ParallaxTextType = {
  name: string;
  src: string;
  left: string;
  direction: string;
};

const Phrase = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className={"flex items-center gap-5 px-5"}>
      <p className="text-[7.5vw]">{name}</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

const Slide = (props: ParallaxTextType & { progress: MotionValue<number> }) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction],
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} name={props.name} />
      <Phrase src={props.src} name={props.name} />
      <Phrase src={props.src} name={props.name} />
    </motion.div>
  );
};

export default function ParallaxTextTransition({
  items,
}: {
  items: ParallaxTextType[];
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div ref={containerRef}>
        {items.map((item) => (
          <Slide
            key={item.src}
            src={item.src}
            direction={item.direction}
            left={item.left}
            progress={scrollYProgress}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
}
