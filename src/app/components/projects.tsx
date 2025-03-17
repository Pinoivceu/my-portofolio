import Card from "./card";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.title}>
          <Card
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            githubUrl={project.githubUrl}
            techStack={project.techStack}
            isPrivate={project.isPrivate}
          />
        </div>
      ))}
    </div>
  );
}