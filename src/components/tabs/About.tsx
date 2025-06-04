import TechStack from "../ui/TechStack";

export default function About() {
  return (
    <section>
      <article className="text-lg">
        I'm <span className="font-machina"> Parthiv</span>, a Full Stack
        Developer and tech enthusiast who's been deep in the world of web apps,
        open source, and startup hustle. From shipping features at startups to
        contributing to open source communities, I thrive on turning ideas into
        scalable, user-friendly products. When I'm not wrangling TypeScript or
        tweaking PostgreSQL queries, you’ll find me experimenting with side
        projects, jamming to music, or catching sunsets with chai in hand. Let’s
        build something people can’t stop talking about.
      </article>
      <div className="my-4">
        <h2 className="font-bold font-machina my-4">Tech Stack #</h2>
        <TechStack />
      </div>
    </section>
  );
}
