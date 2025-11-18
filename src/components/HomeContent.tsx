'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import About from '@/components/tabs/About';
// import Projects from "@/components/tabs/Projects";
import Experiences from '@/components/tabs/Experiences';
import Connect from '@/components/tabs/Connect';
import { ProjectsNew } from './tabs/ProjectsNew';

const tabComponents = {
  About: <About />,
  Projects: <ProjectsNew />,
  Experiences: <Experiences />,
  Connect: <Connect />,
  // ProjectsNew: ,
};

export default function HomeContent() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const tab = searchparams.get('tab');

  const defaultTab = tab && typeof tab === 'string' && tab in tabComponents ? tab : 'About';
  const [activeTab, setActiveTab] = useState<keyof typeof tabComponents>(
    defaultTab as keyof typeof tabComponents
  );

  // --- buzzer/tag state ---
  const [message, setMessage] = useState<string>('Available for hire');

  useEffect(() => {
    if (tab && typeof tab === 'string' && tab in tabComponents) {
      setActiveTab(tab as keyof typeof tabComponents);
    }
  }, [tab]);

  useEffect(() => {
    const messages = ['Available for hire', 'Available for freelance'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setMessage(messages[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-3xl px-4 py-16 transition-all duration-300 ease-in-out sm:px-6 lg:px-8"
    >
      <section className="mb-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-8 sm:text-left">
            {/* --- PROFILE IMAGE WITH SIDE TAG --- */}
            <div className="relative flex flex-col items-center">
              <div className="relative inline-block">
                {/* Profile Image */}
                <Image
                  src="/hero.jpg"
                  height={120}
                  width={130}
                  alt="Parthiv Parmar"
                  className="aspect-auto rounded-full shadow-lg"
                />

                {/* Side Tag — attached to image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.55 }}
                    className="absolute -top-2 z-10 flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[10px] font-medium text-green-500 shadow-md sm:top-0 sm:left-3/4 sm:text-xs md:text-sm"
                  >
                    {/* left notch - gives tag-like attachment */}
                    {/* <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rotate-45"></span> */}

                    {/* pulsing dot */}
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-800 opacity-60"></span>
                      <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                    </span>

                    <span className="text-[13px] leading-5 tracking-wider whitespace-nowrap">
                      {message}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* --- NAME CARD SECTION --- */}
            <div className="relative flex flex-col items-center sm:items-start">
              <div className="group h-[60px] w-[200px] [perspective:1000px]">
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col justify-center [backface-visibility:hidden]">
                    <h1 className="font-machina text-xl sm:text-2xl">Parthiv Parmar</h1>
                    <h2 className="font-machina text-sm text-gray-600 sm:text-base">
                      Software Engineer
                    </h2>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex [transform:rotateX(180deg)] flex-col justify-center [backface-visibility:hidden]">
                    <h1 className="font-machina text-xl sm:text-2xl">Parthiv Parmar</h1>
                    <h2 className="font-machina text-sm text-gray-600 sm:text-base">Humble Guy!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV Link */}
          <a
            href="./Parthiv_Software_Engineer.pdf"
            download
            className="relative inline-block text-sm after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full sm:text-base"
          >
            Hiring? Check out my CV.
          </a>
        </div>
      </section>

      {/* --- Tabs Section --- */}
      <section>
        <hr className="mb-4 border-t border-gray-200" />
        <nav className="sticky top-0 z-10 mt-4 bg-white">
          <ul className="flex flex-wrap gap-4 overflow-x-auto sm:gap-6">
            {Object.keys(tabComponents).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => router.push(`/?tab=${tab}`, undefined)}
                  className={`relative inline-block cursor-pointer px-1 pb-1 text-base font-medium transition-all after:absolute after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] sm:text-lg ${
                    activeTab === tab
                      ? 'after:left-0 after:w-full'
                      : 'hover:after:left-0 hover:after:w-full'
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
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {tabComponents[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  );
}
