"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from "react-icons/fa";
import {
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function TechStack() {
  const stack = [
    { label: "React", icon: <FaReact className="h-5 w-5 mr-2" /> },
    { label: "Node.js", icon: <FaNodeJs className="h-5 w-5 mr-2" /> },
    { label: "Docker", icon: <FaDocker className="h-5 w-5 mr-2" /> },
    { label: "AWS", icon: <FaAws className="h-5 w-5 mr-2" /> },
    { label: "Prisma", icon: <SiPrisma className="h-5 w-5 mr-2" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="h-5 w-5 mr-2" /> },
    { label: "Nextjs", icon: <SiNextdotjs className="h-5 w-5 mr-2" /> },
    { label: "Python", icon: <SiPython className="h-5 w-5 mr-2" /> },
    { label: "Typescript", icon: <SiTypescript className="h-5 w-5 mr-2" /> },
    { label: "Javascript", icon: <SiJavascript className="h-5 w-5 mr-2" /> },
    { label: "Java", icon: <FaJava className="h-5 w-5 mr-2" /> },
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
        throughout the globe. I'm currently working with Typescript and TurboRepos.
      </p>
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    animate(x, 0, { duration: 0.3 });
    animate(y, 0, { duration: 0.3 });
  }

  return (
    <motion.div
      ref={ref}
      className="w-fit px-2 py-1 border shadow-sm cursor-pointer transition-all"
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
