import Image from "next/image";
import Link from "next/link";
import { CardBody, CardItem, CardContainer } from "@/components/ui/3d-card";
import { BiRightArrowAlt } from "react-icons/bi";

export type ProjectCardType = {
  title: string;
  description: string;
  video?: string;
  image?: string;
  liveUrl?: string;
  githubUrl: string;
};

export default function ProjectCard(props: ProjectCardType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[24rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <video
            src={
              props.video ??
              "https://placehold.co/1280x720.mp4?text=Work%20In%20Progress&font=Roboto"
            }
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            poster={
              props.image ??
              "https://placehold.co/1280x720.png?text=Work%20In%20Progress&font=Roboto"
            }
            loop
            autoPlay
            muted
            // controls
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          {props.liveUrl && (
            <CardItem
              translateZ={20}
              as={Link}
              href={props.liveUrl}
              target="_blank"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Visit Now <BiRightArrowAlt size={16} className="inline-block" />
            </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            href={props.githubUrl}
            target="_blank"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
