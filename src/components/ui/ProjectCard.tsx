import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

interface ProjectCardProps {
  heading: string;
  what: string;
  features: string[];
  techstack: string[];
  link?: string;
  github?: string;
  status: 'live' | 'wip';
}

export const ProjectCard = ({
  heading,
  what,
  features,
  techstack,
  link,
  github,
  status,
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-base font-medium tracking-tight">{heading}</h3>
        <span
          className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-medium ${
            status === 'live' ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
          }`}
        >
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              status === 'live' ? 'bg-green-500' : 'bg-amber-400'
            }`}
          />
          {status === 'live' ? 'Live' : 'In progress'}
        </span>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-gray-500">{what}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {features.map((f, i) => (
          <span
            key={i}
            className="rounded-md border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500"
          >
            {f}
          </span>
        ))}
      </div>

      <hr className="mb-4 border-gray-100" />

      <div className="mb-4 flex flex-wrap gap-1.5">
        {techstack.map((tech, i) => (
          <span
            key={i}
            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
          >
            ↗ Demo
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
          >
            <BsGithub /> Code
          </Link>
        )}
      </div>
    </div>
  );
};
