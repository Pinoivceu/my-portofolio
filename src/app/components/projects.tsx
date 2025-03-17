import Card from "./card";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link key={project.slug} href={`/portofolio/${project.slug}`} passHref>
          <Card
            title={project.title}
            description={project.description}
            imageSrc={project.image}
          />
        </Link>
      ))}
    </div>
  );
}
