import { SocialsLinkType } from "@/components/sections/FooterSection";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

export const socials: SocialsLinkType[] = [
  {
    label: "Github",
    icon: SiGithub,
    url: "https://github.com/Avaneesh-Chopdekar",
    color: "rebeccapurple",
  },
  {
    label: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/avaneesh-chopdekar-9a7b59314",
    color: "dodgerblue",
  },
  {
    label: "X (Twitter)",
    icon: SiX,
    url: "https://x.com/HelloAvaneesh",
    color: "black",
  },
  {
    label: "Youtube",
    icon: SiYoutube,
    url: "https://www.youtube.com/@avaneeshc",
    color: "red",
  },
];
