import { Suspense } from "react";
import Head from "next/head";
import HomeContent from "@/components/HomeContent";

export default function Page() {
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

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <HomeContent />
      </Suspense>
    </>
  );
}
