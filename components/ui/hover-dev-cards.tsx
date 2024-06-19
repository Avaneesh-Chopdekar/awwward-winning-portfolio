"use client";
import { IconType } from "react-icons";
import { useAtomValue } from "jotai";
import { tabs, skillSet } from "@/app/constants/skills";
import skillAtom from "@/atoms/skillAtom";

export type HoverDevCardsType = {
  title: string;
  subtitle: string;
  href: string;
  icon: IconType;
};

const HoverDevCards = () => {
  const selected = useAtomValue(skillAtom);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" key={tabs[selected]}>
      {skillSet[selected].map((item: HoverDevCardsType) => (
        <Card
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

const Card = (props: HoverDevCardsType) => {
  return (
    <a
      href={props.href}
      className="group relative w-full overflow-hidden rounded border-[1px] border-slate-300 bg-white p-4"
    >
      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:translate-y-[0%]" />

      <props.icon className="absolute -right-12 -top-12 z-10 text-9xl text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:text-violet-400" />
      <props.icon className="relative z-10 mb-2 text-2xl text-violet-600 transition-colors duration-300 group-hover:text-white" />
      <h3 className="relative z-10 text-lg font-medium text-slate-950 duration-300 group-hover:text-white">
        {props.title}
      </h3>
      <p className="relative z-10 text-slate-400 duration-300 group-hover:text-violet-200">
        {props.subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
