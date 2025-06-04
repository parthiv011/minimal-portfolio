import Link from "next/link";
import { TechBadge } from "./TechBadge";
import { BsGithub } from "react-icons/bs";

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
    <div className="border rounded-xl flex flex-col p-6 shadow">
      <div className="mb-4">
        <h3 className="text-xl font-semibold leading-relaxed tracking-tight">
          {heading}
        </h3>
        <p className="text-gray-700 leading-relaxed tracking-tight">
          {description}
        </p>
      </div>

      <hr className="mb-4" />

      <div className="inline-flex items-center gap-4 mb-2">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gray-300 py-2 px-4 rounded-xl"
          >
            <span className="inline-flex justify-center items-center text-sm font-medium">
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
                className="lucide lucide-globe-icon lucide-globe size-4 mr-2"
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
          className="inline-flex bg-gray-300 py-2 rounded-xl px-4"
        >
          <span className="inline-flex justify-center items-center text-sm font-medium">
            <BsGithub className="size-4 mr-2" />
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
