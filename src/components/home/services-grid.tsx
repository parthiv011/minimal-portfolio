'use client';

import React from 'react';
import { motion } from 'motion/react';
// import { AnimatedFullstack } from './animated-fullstack';
import { techConfig } from '@/utils/tech';
import { AnimatedTooltip } from './animated-tooltip';
import { AnimatedFullstack } from './animated-fullstack';

/**
 * Services Section
 *
 * CMMI Level-3 Compliant:
 * - Predictable and deterministic layout logic
 * - Minimal condition complexity
 * - Separated concerns (data vs UI)
 * - Responsive and stable grid behavior
 */

export const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      desc: 'Production-ready UIs that integrate cleanly with backend systems — built with React, Next.js, and TypeScript with consistent cross-device behavior.',
      tech: [
        techConfig.javascript,
        techConfig.typescript,
        techConfig.react,
        techConfig.nextjs,
        techConfig.tailwind,
        techConfig.framer,
      ],
    },
    {
      title: 'Backend Development',
      desc: 'Stable APIs and backend systems with proper error handling, data pipelines, and service communication — built to scale.',
      tech: [
        techConfig.nodejs,
        techConfig.prisma,
        techConfig.java,
        techConfig.python,
        techConfig.docker,
        techConfig.aws,
      ],
    },
    {
      title: 'Full Stack Development',
      desc: "End-to-end product ownership — from schema design to deployment. I've shipped complete systems solo and in teams.",
      component: <AnimatedFullstack />,
    },
  ];

  return (
    <section>
      <h2 className="font-machina my-4 font-bold">What I build #</h2>

      <div className="grid grid-cols-1 border border-neutral-200 sm:grid-cols-2">
        {services.map((item, index) => {
          const isSingleInLastRow = services.length % 2 !== 0 && index === services.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeInOut',
              }}
              className={`/* Base borders */ /* Right only for left column */ border border-b border-neutral-200 p-5 sm:border-b ${index % 2 === 0 ? 'sm:border-r' : ''} /* Last odd item spans both columns */ ${isSingleInLastRow ? 'sm:col-span-2 sm:border-r-0' : ''} /* Remove bottom for last row */ border ${index >= services.length - 2 ? 'sm:border-b-0' : ''} `}
            >
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

              <p className="text-base leading-relaxed text-gray-600">{item.desc}</p>

              {item.tech && (
                <div className="mt-3 flex flex-wrap items-center gap-1">
                  {item.tech.map((tech, idx) => (
                    <AnimatedTooltip
                      key={idx}
                      id={idx}
                      Icon={tech.icon}
                      label={tech.label}
                      color={tech.color}
                    />
                  ))}
                </div>
              )}

              {item.component && <div className="mt-4">{item.component}</div>}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
