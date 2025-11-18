import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../utils/lib';

export default function Projects() {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-lg font-semibold">
        Projects #{' '}
        <span className="text-sm font-semibold text-gray-800">(sorted by most recent)</span>
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
