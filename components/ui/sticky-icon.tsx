"use client";
import { useRef, useState, MouseEvent, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function StickyIcon(props: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onMouseMove(event: MouseEvent) {
    if (!containerRef.current) return;

    const { clientX, clientY } = event;
    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2); // centering the point horizontally
    const y = clientY - (top + height / 2); // centering the point vertically
    setPosition({ x, y });
  }

  function onMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x, y }}
      ref={containerRef}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {props.children}
    </motion.div>
  );
}
