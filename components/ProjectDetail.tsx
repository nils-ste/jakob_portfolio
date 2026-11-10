import type { Project } from "@/data/projects";
import ImageScroll from "./ImageScroll";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full md:max-w-100 ">
        {project.images ? (
          <ImageScroll images={project.images} />
        ) : project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        ) : null}
      </div>

      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.year}</p>
    </section>
  );
}
