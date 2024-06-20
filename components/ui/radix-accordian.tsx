/* eslint-disable react/display-name */
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";

export type FAQItem = {
  title: string;
  description: string;
};

type RadixAccordianProps = {
  items: FAQItem[];
};

export default function RadixAccordion(props: RadixAccordianProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="mx-auto mt-12 w-[90%] md:w-3/4 2xl:w-1/2"
    >
      {props.items.map((item) => (
        <Accordion.Item
          key={item.title}
          value={item.title}
          className="mb-2 rounded-md border px-8 py-4"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full flex-1 items-center justify-between gap-6 text-start">
              <p className="">{item.title}</p>
              <BiChevronDown
                aria-hidden
                className="hidden text-2xl transition-transform duration-300 group-data-[state=open]:rotate-180 sm:block"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mt-2 overflow-hidden text-neutral-500">
            {item.description}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
