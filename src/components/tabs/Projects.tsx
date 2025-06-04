<<<<<<< HEAD
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "./../../utils/lib";

export default function Projects() {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold mb-4">
        Projects #{" "}
        <span className="text-gray-800 font-semibold text-sm">
          (sorted by most recent)
        </span>
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              heading={project.heading}
              description={project.description}
              link={project.link}
              github={project.github}
              techstack={project.techstack}
            />
          );
        })}
      </div>
    </div>
  );
}
=======
export default function Projects() {
    return <div>Projects Tab</div>;
  }
  
>>>>>>> origin/main
