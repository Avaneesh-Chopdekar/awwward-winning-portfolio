import { motion } from "framer-motion";
import Link from "next/link";
import { linkVariants } from "./variants";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      variants={linkVariants}
      initial="initial"
      whileHover="hovered"
      animate="open"
      exit="initial"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-bold uppercase sm:text-6xl md:text-7xl xl:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <Link href={href} onClick={onClick}>
        <div>
          {children.split("").map((link, index) => (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              key={`${link}-${index}-first`}
            >
              {link}
            </motion.span>
          ))}
        </div>

        <div className="absolute inset-0">
          {children.split("").map((link, index) => (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              key={`${link}-${index}-second`}
            >
              {link}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};
