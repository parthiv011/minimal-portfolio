import { FaReact } from "react-icons/fa";
import TechStack from "../ui/TechStack";

export default function About() {
  return (
    <section>
      <article className="text-lg">
        I'm <span className="font-machina"> Parthiv</span>, an AI Software
        Engineer and ex-Founding Engineer at a YC firm, who's all about turning
        wild ideas into kick-ass web apps. When I'm not submerged in
        code-commits, you can catch me dive-deep in a page-turner, geeking out
        over the latest Netflix obsession, or exploring the great outdoors with
        my dog Brewsky. Let's team up and build some exceptional products.
      </article>
      <div className="my-4">
        <h2 className="font-bold font-machina my-4">Tech Stack #</h2>
        <TechStack />
      </div>
    </section>
  );
}
