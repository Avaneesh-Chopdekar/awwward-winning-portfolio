import React from "react";
import TextRevealByWord from "@/components/magicui/text-reveal";
import ProjectCard from "../project-card";
import { projectsInfo } from "@/app/constants/projectsInfo";

export default function ProjectsSection() {
  return (
    <section className="">
      <TextRevealByWord text="I love creating software that tackles real-world problems and makes a difference." />
      <p className="mt-8 text-center text-4xl font-semibold md:mt-0 md:text-6xl">
        Projects
      </p>
      <div className="mx-4 grid grid-cols-1 sm:mx-0 lg:grid-cols-2 2xl:grid-cols-3">
        {projectsInfo.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            image={project.image}
            video={project.video}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}
