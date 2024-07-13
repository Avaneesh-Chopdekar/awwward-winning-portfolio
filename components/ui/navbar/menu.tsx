"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";

// TODO: Add hover.dev reveal links later

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Chat",
    href: "/chat",
  },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen((prevState) => !prevState);
  }

  const menuVariants: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants: Variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="cursor-pointer rounded-full bg-yellow-400 px-4 py-1 text-lg text-black"
      >
        Menu
      </button>
      <AnimatePresence>
        {open ? (
          <motion.nav
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 h-svh w-full origin-top bg-yellow-400 p-10 text-black"
          >
            <div className="flex h-full flex-col">
              <button
                className="absolute right-8 top-9 cursor-pointer px-4 text-lg text-black"
                onClick={toggleMenu}
              >
                Close
              </button>
              <motion.ul
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex h-full flex-col items-center justify-center gap-4"
              >
                {navLinks.map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      variants={linkVariants}
                      className="text-4xl uppercase text-black"
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setTimeout(() => {
                            toggleMenu();
                          }, 500);
                        }}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
