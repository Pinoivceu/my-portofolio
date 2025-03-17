import Image from "next/image";
import { FaGithub, FaLock } from "react-icons/fa";

const Card = ({
  title,
  description,
  imageSrc,
  githubUrl,
  techStack,
  isPrivate,
}: {
  title: string;
  description: string;
  imageSrc: string;
  githubUrl?: string;
  techStack: string[];
  isPrivate: boolean;
}) => {
  return (
    <div className="group relative bg-surface shadow-lg rounded-xl border border-foreground hover:shadow-xl transition-all overflow-hidden">
      {/* Image (Aspect Ratio 4:3) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Hover Blur Effect with GitHub Link */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        {isPrivate ? (
          <span className="text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-md backdrop-blur-lg flex items-center">
            <FaLock className="mr-2" /> Private Repository
          </span>
        ) : githubUrl ? (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-md backdrop-blur-lg flex items-center hover:bg-white/30"
          >
            <FaGithub className="mr-2" /> 
            <span>See GitHub Code</span>
          </a>
        ) : (
          <span className="text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-md backdrop-blur-lg">
            Selengkapnya
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-secondary mt-2 mb-3 h-16 overflow-hidden">{description}</p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 text-xs bg-surface-variant text-primary rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;