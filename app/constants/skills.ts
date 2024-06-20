import { HoverDevCardsType } from "@/components/ui/hover-dev-cards";
import {
  SiAndroidstudio,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFiles,
  SiFlask,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithub,
  SiJest,
  SiJetpackcompose,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPosthog,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

export const tabs = ["Web", "Mobile", "Backend", "Tools"];

export const webSkills: HoverDevCardsType[] = [
  {
    title: "React",
    subtitle: "Most popular javascript library",
    href: "https://react.dev",
    icon: SiReact,
  },
  {
    title: "Next.js",
    subtitle: "The modern react framework",
    href: "https://nextjs.org",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    subtitle: "CSS library with utility classes",
    href: "https://tailwindcss.com",
    icon: SiTailwindcss,
  },
  {
    title: "Tanstack Query",
    subtitle: "Server state management",
    href: "https://query.gg",
    icon: SiReactquery,
  },
  {
    title: "Framer Motion",
    subtitle: "Animation library for react",
    href: "https://framer-motion.com",
    icon: SiFramer,
  },
  {
    title: "Redux Toolkit",
    subtitle: "State management for react",
    href: "https://redux-toolkit.com",
    icon: SiRedux,
  },
  {
    title: "Jest",
    subtitle: "A unit testing library",
    href: "https://jest.com",
    icon: SiJest,
  },
  {
    title: "Cypress",
    subtitle: "An end to end testing library",
    href: "https://cypressjs.com",
    icon: SiCypress,
  },
];

export const mobileSkills: HoverDevCardsType[] = [
  {
    title: "Kotlin + XML",
    subtitle: "Native android apps",
    href: "https://developers.android.com",
    icon: SiAndroidstudio,
  },
  {
    title: "Jetpack Compose",
    subtitle: "Declarative UI for android",
    href: "https://reactnative.dev",
    icon: SiJetpackcompose,
  },
  {
    title: "Flutter",
    subtitle: "Fast cross platform apps",
    href: "https://flutter.dev",
    icon: SiFlutter,
  },
  {
    title: "React Native",
    subtitle: "Learn once, write anywhere",
    href: "https://reactnative.dev",
    icon: SiReact,
  },
  {
    title: "Expo",
    subtitle: "Environment for react native",
    href: "https://reactnative.dev",
    icon: SiExpo,
  },
  {
    title: "MVVM",
    subtitle: "Clean architecture",
    href: "https://reactnative.dev",
    icon: SiFiles,
  },
  {
    title: "Flutter BLOC",
    subtitle: "Flutter state management",
    href: "https://pub.dev",
    icon: SiFlutter,
  },
];

export const backendSkills: HoverDevCardsType[] = [
  {
    title: "Express.js",
    subtitle: "Node.js backend framework",
    href: "https://expressjs.com",
    icon: SiExpress,
  },
  {
    title: "Flask",
    subtitle: "Micro web framework",
    href: "https://flask.com",
    icon: SiFlask,
  },
  {
    title: "FastAPI",
    subtitle: "Modern python framework",
    href: "https://fastapi.tiangolo.com",
    icon: SiFastapi,
  },
  {
    title: "Django with DRF",
    subtitle: "Robust backend framework",
    href: "https://django.com",
    icon: SiDjango,
  },
  {
    title: "PostgreSQL",
    subtitle: "Popular relational database",
    href: "https://postgresql.com",
    icon: SiPostgresql,
  },
  {
    title: "MySQL",
    subtitle: "Popular relational database",
    href: "https://mysql.com",
    icon: SiMysql,
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL document database",
    href: "https://mongodb.com",
    icon: SiMongodb,
  },
  {
    title: "Redis",
    subtitle: "A fast key value storage",
    href: "https://redis.com",
    icon: SiRedis,
  },
];

export const toolSkills: HoverDevCardsType[] = [
  {
    title: "Visual Studio Code",
    subtitle: "Simple code editor",
    href: "https://vscode.com",
    icon: SiVisualstudiocode,
  },
  {
    title: "Android Studio",
    subtitle: "IDE for Android",
    href: "https://developers.android.com",
    icon: SiAndroidstudio,
  },
  {
    title: "Git",
    subtitle: "Version control system",
    href: "https://git.com",
    icon: SiGit,
  },
  {
    title: "Github",
    subtitle: "Collaborative dev platform",
    href: "https://github.com",
    icon: SiGithub,
  },
  {
    title: "ChatGPT",
    subtitle: "OpenAI's virtual assitant",
    href: "https://chatgpt.com",
    icon: SiOpenai,
  },
  {
    title: "Posthog",
    subtitle: "Open source analytics tool",
    href: "https://posthog.com",
    icon: SiPosthog,
  },
  {
    title: "Figma",
    subtitle: "UI/UX design tool",
    href: "https://figma.com",
    icon: SiFigma,
  },
  {
    title: "Docker",
    subtitle: "For containerizing apps",
    href: "https://docker.com",
    icon: SiDocker,
  },
];

export const skillSet = [webSkills, mobileSkills, backendSkills, toolSkills];
