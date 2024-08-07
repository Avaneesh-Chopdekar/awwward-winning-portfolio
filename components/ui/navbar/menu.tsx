"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "./navLinks";
import { containerVariants, menuVariants } from "./variants";
import { FlipLink } from "./flip-link";

export default function Menu() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen((prevState) => !prevState);
  }

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="cursor-pointer rounded-full bg-yellow-400 px-4 py-1 font-semibold uppercase text-black sm:px-8 sm:py-2"
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
            className="fixed left-0 top-0 h-dvh w-full origin-top bg-yellow-400 p-10 text-black"
          >
            <div className="flex h-full flex-col">
              <button
                className="absolute right-8 top-9 cursor-pointer px-4 py-1 font-semibold uppercase text-black sm:px-8"
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
                    <FlipLink href={link.href} onClick={toggleMenu}>
                      {link.title}
                    </FlipLink>
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

{
  /* Previous link component
    <motion.div
      variants={linkVariants}
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
    </motion.div> */
}
