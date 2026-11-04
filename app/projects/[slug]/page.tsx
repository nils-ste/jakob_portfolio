import { Suspense } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading project...</p>}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
