import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return project.cover ? (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          width={1200}
          height={800}
          className="h-auto w-full transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h2 className="font-cormorant text-xl text-black">{project.title}</h2>
        </div>
      </div>
    </Link>
  ) : (
    ""
  );
}
