import Link from 'next/link';
import { TechBadge } from './TechBadge';
import { BsGithub } from 'react-icons/bs';

interface ProjectCardProps {
  heading: string;
  description: string;
  link?: string;
  github: string;
  techstack: string[];
}

export const ProjectCard = ({
  heading,
  description,
  link,
  github,
  techstack,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border p-6 shadow">
      <div className="mb-4">
        <h3 className="text-xl leading-relaxed font-semibold tracking-tight">{heading}</h3>
        <p className="leading-relaxed tracking-tight text-gray-700">{description}</p>
      </div>

      <hr className="mb-4" />

      <div className="mb-2 inline-flex items-center gap-4">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-gray-300 px-4 py-2 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-400 hover:shadow-md"
          >
            <span className="inline-flex items-center justify-center text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe-icon lucide-globe mr-2 size-4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Website
            </span>
          </Link>
        )}
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-xl bg-gray-300 px-4 py-2 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-400 hover:shadow-md"
        >
          <span className="inline-flex items-center justify-center text-sm font-medium">
            <BsGithub className="mr-2 size-4" />
            Repo
          </span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {techstack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};
