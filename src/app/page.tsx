"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import About from "@/components/tabs/About";
import Present from "@/components/tabs/Present";
import Projects from "@/components/tabs/Projects";
import Experiences from "@/components/tabs/Experiences";
import Connect from "@/components/tabs/Connect";

const tabComponents = {
  About: <About />,
  Present: <Present />,
  Projects: <Projects />,
  Experiences: <Experiences />,
  Connect: <Connect />,
};

export default function Home() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof tabComponents>("About");

  return (
    <main className="relative max-w-2xl mx-auto py-24 pt-12 px-1">
      <section>
        <div className="flex items-center justify-between space-y-4">
          <div className="flex items-center gap-8">
            <Image
              src="/hero.png"
              height={150}
              width={150}
              alt="Parthiv Parmar"
              className="rounded-full shadow-lg"
            />
            <div>
              <h1 className="font-machina">Parthiv Parmar</h1>
              <h2 className="font-machina">Full Stack Engineer</h2>
            </div>
          </div>
          <Link
            href="/"
            className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            Hiring? Check out my CV.
          </Link>
        </div>
      </section>

      <section>
        <hr className="my-4" />
        <nav className="sticky top-4 z-10">
          <ul className="flex gap-6">
            {Object.keys(tabComponents).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() =>
                    setActiveTab(tab as keyof typeof tabComponents)
                  }
                  className={`relative inline-block px-1 transition-all font-medium duration-300 after:content-[''] after:absolute  after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300
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
  );
}
