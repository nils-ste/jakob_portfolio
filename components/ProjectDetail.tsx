import type { Project } from "@/data/projects";
import ImageScroll from "./ImageScroll";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="flex flex-col items-center">
      <div className="relative overflow-hidden md:max-w-100 md:m-5">
        {project.images ? (
          <ImageScroll images={project.images} />
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={800}
            className="h-auto w-full transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
          />
        )}
      </div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.year}</p>
    </section>
  );
}
