"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from "react-icons/fa";
import {
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { Magnetic } from "./magnetic";

export default function TechStack() {
  const stack = [
    { label: "Javascript", icon: <SiJavascript className="h-5 w-5 mr-2" /> },
    { label: "Typescript", icon: <SiTypescript className="h-5 w-5 mr-2" /> },
    { label: "Java", icon: <FaJava className="h-5 w-5 mr-2" /> },
    { label: "React", icon: <FaReact className="h-5 w-5 mr-2" /> },
    { label: "Nextjs", icon: <SiNextdotjs className="h-5 w-5 mr-2" /> },
    { label: "Node.js", icon: <FaNodeJs className="h-5 w-5 mr-2" /> },
    { label: "Docker", icon: <FaDocker className="h-5 w-5 mr-2" /> },
    { label: "Prisma", icon: <SiPrisma className="h-5 w-5 mr-2" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="h-5 w-5 mr-2" /> },
    { label: "AWS", icon: <FaAws className="h-5 w-5 mr-2" /> },
    { label: "Python", icon: <SiPython className="h-5 w-5 mr-2" /> },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {stack.map((tech) => (
        <TiltCard key={tech.label}>
          <div className="flex items-center">
            {tech.icon}
            {tech.label}
          </div>
        </TiltCard>
      ))}
      <p>
        My strength is building core web applications which can serve people
        throughout the globe. I&apos;m currently working with Typescript and
        TurboRepos.
      </p>
      <p>
        Currently learning more about FinTech, with a focus on how tech can
        solve real problems in finance.
      </p>
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
        className="w-fit px-2.5 py-0.5 border shadow-sm cursor-pointer bg-white"
      >
        {children}
      </motion.div>
    </Magnetic>
  );
}
