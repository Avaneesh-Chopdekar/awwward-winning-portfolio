import { SocialsLinkType } from "@/components/sections/FooterSection";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

export const socials: SocialsLinkType[] = [
  {
    label: "Github",
    icon: SiGithub,
    url: "https://github.com/Avaneesh-Chopdekar",
    color: "text-black",
  },
  {
    label: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/avaneesh-chopdekar-9a7b59314",
    color: "text-blue-500",
  },
  {
    label: "X (Twitter)",
    icon: SiX,
    url: "https://x.com/HelloAvaneesh",
    color: "text-black",
  },
  {
    label: "Youtube",
    icon: SiYoutube,
    url: "https://www.youtube.com/@avaneeshc",
    color: "text-red-500",
  },
];
