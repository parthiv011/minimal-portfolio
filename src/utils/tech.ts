import { FaJava } from 'react-icons/fa6';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiPython,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';

export const techConfig = {
  javascript: {
    label: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
  },
  typescript: {
    label: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-500',
  },
  java: {
    label: 'Java',
    icon: FaJava,
    color: 'text-red-500',
  },
  react: {
    label: 'React',
    icon: FaReact,
    color: 'text-sky-400',
  },
  nextjs: {
    label: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-black',
  },
  nodejs: {
    label: 'Node.js',
    icon: FaNodeJs,
    color: 'text-green-500',
  },
  docker: {
    label: 'Docker',
    icon: FaDocker,
    color: 'text-blue-400',
  },
  prisma: {
    label: 'Prisma',
    icon: SiPrisma,
    color: 'text-slate-500',
  },
  tailwind: {
    label: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-teal-400',
  },
  aws: {
    label: 'AWS',
    icon: FaAws,
    color: 'text-orange-500',
  },
  python: {
    label: 'Python',
    icon: SiPython,
    color: 'text-blue-300',
  },
  framer: {
    label: 'Motion',
    icon: TbBrandFramerMotion,
    color: 'text-black',
  },
} as const;
