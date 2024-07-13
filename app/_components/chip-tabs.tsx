"use client";
import skillAtom from "@/atoms/skillAtom";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { Dispatch, SetStateAction } from "react";

const ChipTabs = ({ tabs }: { tabs: string[] }) => {
  const [selected, setSelected] = useAtom(skillAtom);

  return (
    <div className="flex flex-wrap items-center gap-2 px-4 py-14">
      {tabs.map((tab, index) => (
        <Chip
          text={tab}
          isSelected={tab === tabs[selected]}
          index={index}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  index,
  setSelected,
  isSelected,
}: {
  text: string;
  index: number;
  setSelected: Dispatch<SetStateAction<number>>;
  isSelected: boolean;
}) => {
  return (
    <button
      onClick={() => setSelected(index)}
      className={`${
        isSelected
          ? "text-white"
          : "text-slate-300 hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
      } relative rounded-md px-2.5 py-0.5 transition-colors sm:text-xl`}
    >
      <span className="relative z-10">{text}</span>
      {isSelected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
