import { projects } from "@/utils/lib";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Magnetic } from "../ui/magnetic";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectsNew = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">
        Projects #{" "}
        <span className="text-gray-800 font-semibold text-sm">
          (sorted by most recent)
        </span>
      </h2>

      <div className="space-y-10 mt-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.heading} // ✅ Use stable unique key (not index)
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }} // ✅ triggers only once per card
            className="border-b border-gray-200 pb-6"
          >
            {/* --- Header (title + link) --- */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <p className="text-neutral-700 text-xl font-machina">
                  {idx + 1}.
                </p>
                <h2 className="font-normal leading-7 text-xl font-machina">
                  {project.heading}
                </h2>
              </div>

              {project.link && (
                <Link href={project.link}>
                  <span className="flex items-center hover:translate-x-1 duration-300 font-machina">
                    <FiChevronRight className="size-4" />
                  </span>
                </Link>
              )}
            </div>

            {/* --- Image Section --- */}
            {project.image && (
              <div className="w-full overflow-hidden mt-3">
                <Image
                  src={project.image}
                  alt={project.heading}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* --- Tech Stack Tags --- */}
            {project.techstack?.length ? (
              <div className="flex gap-3 flex-wrap text-sm my-4">
                {project.techstack.map((tech) => (
                  <Magnetic key={tech} stretch="sm">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: Math.random() * 2.5,
                        transition: { duration: 0.1 },
                      }}
                      className="w-fit px-2.5 py-0.5 border shadow-sm cursor-pointer bg-white"
                    >
                      {tech}
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            ) : null}

            {/* --- Description --- */}
            <p className="py-2 text-sm leading-relaxed text-gray-700">
              {project.description}
            </p>

            {/* --- GitHub Link --- */}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer" // ✅ important security fix
                className="text-xs text-blue-600 hover:translate-x-1 duration-300 transition-all inline-flex items-center gap-1"
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
