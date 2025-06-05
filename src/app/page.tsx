"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import About from "@/components/tabs/About";
import Present from "@/components/tabs/Present";
import Projects from "@/components/tabs/Projects";
import Experiences from "@/components/tabs/Experiences";
import Connect from "@/components/tabs/Connect";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const tabComponents = {
  About: <About />,
  // Present: <Present />,
  Projects: <Projects />,
  Experiences: <Experiences />,
  Connect: <Connect />,
};

export default function Home() {
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
    <>
      <Head>
        <title>Parthiv Parmar | Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Parthiv Parmar, a Full Stack Engineer passionate about building modern, scalable applications and exploring FinTech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Parthiv Parmar | Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Explore Parthiv Parmar's projects, experience, and interests in full-stack development and FinTech."
        />
        <meta property="og:image" content="/hero.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="relative max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
              <Image
                src="/hero.png"
                height={120}
                width={120}
                alt="Parthiv Parmar"
                className="rounded-full shadow-lg"
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
              href="./Parthiv_Full_stack.pdf"
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
                    className={`relative inline-block px-1 pb-1 transition-all font-medium text-sm sm:text-base after:content-[''] after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300
                  ${
                    activeTab === tab
                      ? "after:left-0 after:w-full"
                      : "hover:after:left-0 hover:after:w-full"
                  }
                `}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6">{tabComponents[activeTab]}</div>
        </section>
      </main>
    </>
  );
}
