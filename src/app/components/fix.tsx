// import { projects } from "@/data/projects";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// // Correctly typed generateStaticParams
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// // Use a more generic approach that should work with various Next.js configs
// type PageParams = {
//   params: any; // This is intentionally 'any' to accommodate your specific Next.js setup
// }

// export default function ProjectDetail({ params }: PageParams) {
//   // Extract the slug safely
//   const slug = typeof params === 'object' && params !== null 
//     ? (params as any).slug 
//     : '';

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return notFound();
//   }

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold">{project.title}</h1>
//       <Image
//         src={project.image}
//         alt={project.title}
//         width={800}
//         height={400}
//         className="rounded-lg my-6"
//         priority
//       />
//       <p className="text-lg">{project.details}</p>
//     </div>
//   );
// }