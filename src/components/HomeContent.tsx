"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import About from "@/components/tabs/About";
import Projects from "@/components/tabs/Projects";
import Experiences from "@/components/tabs/Experiences";
import Connect from "@/components/tabs/Connect";

const tabComponents = {
  About: <About />,
  Projects: <Projects />,
  Experiences: <Experiences />,
  Connect: <Connect />,
};

export default function HomeContent() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const tab = searchparams.get("tab");

  const defaultTab =
    tab && typeof tab === "string" && tab in tabComponents ? tab : "About";
  const [activeTab, setActiveTab] = useState<keyof typeof tabComponents>(
    defaultTab as keyof typeof tabComponents
  );

  useEffect(() => {
    if (tab && typeof tab === "string" && tab in tabComponents) {
      setActiveTab(tab as keyof typeof tabComponents);
    }
  }, [tab]);

  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="relative max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out"
    >
      <section className="mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <Image
              src="/hero.jpg"
              height={120}
              width={130}
              alt="Parthiv Parmar"
              className="rounded-full shadow-lg aspect-auto"
            />

            <div className="w-[200px] h-[60px] [perspective:1000px] group">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col justify-center [backface-visibility:hidden]">
                  <h1 className="font-machina text-xl sm:text-2xl">
                    Parthiv Parmar
                  </h1>
                  <h2 className="font-machina text-sm sm:text-base text-gray-600">
                    Full Stack Engineer
                  </h2>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <h1 className="font-machina text-xl sm:text-2xl">
                    Parthiv Parmar
                  </h1>
                  <h2 className="font-machina text-sm sm:text-base text-gray-600">
                    Humble Guy!
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <a
            href="./Parthiv_Full_Stack_1year.pdf"
            download
            className="text-sm sm:text-base relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            Hiring? Check out my CV.
          </a>
        </div>
      </section>

      <section>
        <hr className="border-t border-gray-200 mb-4" />
        <nav className="sticky top-0 pt-4 z-10 bg-white">
          <ul className="flex gap-4 sm:gap-6 flex-wrap overflow-x-auto">
            {Object.keys(tabComponents).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => router.push(`/?tab=${tab}`, undefined)}
                  className={`relative inline-block px-1 pb-1 transition-all font-medium text-sm sm:text-base after:content-[''] after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 cursor-pointer
              ${
                activeTab === tab
                  ? "after:left-0 after:w-full"
                  : "hover:after:left-0 hover:after:w-full"
              }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Framer Motion tab transition */}
        <div className="mt-6 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {tabComponents[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  );
}
