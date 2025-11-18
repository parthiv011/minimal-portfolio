import { projects } from '@/utils/lib';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Magnetic } from '../ui/magnetic';
import { motion } from 'motion/react';
import Image from 'next/image';

export const ProjectsNew = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">
        Projects #{' '}
        <span className="text-sm font-semibold text-gray-800">(sorted by most recent)</span>
      </h2>

      <div className="mt-4 space-y-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.heading} // ✅ Use stable unique key (not index)
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }} // ✅ triggers only once per card
            className="border-b border-gray-200 pb-6"
          >
            {/* --- Header (title + link) --- */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <p className="font-machina text-xl text-neutral-700">{idx + 1}.</p>
                <h2 className="font-machina text-xl leading-7 font-normal">{project.heading}</h2>
              </div>

              {project.link && (
                <Link href={project.link}>
                  <span className="font-machina flex items-center duration-300 hover:translate-x-1">
                    <FiChevronRight className="size-4" />
                  </span>
                </Link>
              )}
            </div>

            {/* --- Image Section --- */}
            {project.image && (
              <div className="mt-3 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.heading}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

            {/* --- Tech Stack Tags --- */}
            {project.techstack?.length ? (
              <div className="my-4 flex flex-wrap gap-3 text-sm">
                {project.techstack.map((tech) => (
                  <Magnetic key={tech} stretch="sm">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: Math.random() * 2.5,
                        transition: { duration: 0.1 },
                      }}
                      className="w-fit cursor-pointer border bg-white px-2.5 py-0.5 shadow-sm"
                    >
                      {tech}
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            ) : null}

            {/* --- Description --- */}
            <p className="py-2 text-sm leading-relaxed text-gray-700">{project.description}</p>

            {/* --- GitHub Link --- */}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer" // ✅ important security fix
                className="inline-flex items-center gap-1 text-xs text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                View on GitHub
                <FiChevronRight className="size-4" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
