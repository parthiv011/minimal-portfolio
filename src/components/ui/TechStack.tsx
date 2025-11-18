'use client';
import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from 'react-icons/fa';
import {
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import { Magnetic } from './magnetic';

export default function TechStack() {
  const stack = [
    { label: 'Javascript', icon: <SiJavascript className="mr-2 h-5 w-5" /> },
    { label: 'Typescript', icon: <SiTypescript className="mr-2 h-5 w-5" /> },
    { label: 'Java', icon: <FaJava className="mr-2 h-5 w-5" /> },
    { label: 'React', icon: <FaReact className="mr-2 h-5 w-5" /> },
    { label: 'Nextjs', icon: <SiNextdotjs className="mr-2 h-5 w-5" /> },
    { label: 'Node.js', icon: <FaNodeJs className="mr-2 h-5 w-5" /> },
    { label: 'Docker', icon: <FaDocker className="mr-2 h-5 w-5" /> },
    { label: 'Prisma', icon: <SiPrisma className="mr-2 h-5 w-5" /> },
    { label: 'Tailwind', icon: <SiTailwindcss className="mr-2 h-5 w-5" /> },
    { label: 'AWS', icon: <FaAws className="mr-2 h-5 w-5" /> },
    { label: 'Python', icon: <SiPython className="mr-2 h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {stack.map((tech) => (
        <TiltCard key={tech.label}>
          <div className="flex items-center">
            {tech.icon}
            {tech.label}
          </div>
        </TiltCard>
      ))}
      {/* <p>
        My strength is building core web applications which can serve people
        throughout the globe. I&apos;m currently working with Typescript and
        TurboRepos.
      </p>
      <p>
        Currently learning more about FinTech, with a focus on how tech can
        solve real problems in finance.
      </p> */}
    </div>
  );
}

export function TiltCard({ children }: { children: React.ReactNode }) {
  return (
    <Magnetic stretch="sm">
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: Math.random() * 2.5,
          transition: { duration: 0.1 },
        }}
        className="w-fit cursor-pointer border bg-white px-2.5 py-0.5 shadow-sm"
      >
        {children}
      </motion.div>
    </Magnetic>
  );
}
