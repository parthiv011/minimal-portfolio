import { CTA } from '../home/cta';
import { Industries } from '../home/industries';
import { InforArticle } from '../home/info-article';
import { Services } from '../home/services-grid';
// import TechStack from '../ui/TechStack';

export default function About() {
  return (
    <section>
      <InforArticle />

      {/* <div className="my-4">
        <h2 className="font-machina my-4 font-bold">Tech Stack #</h2>
        <TechStack />
      </div> */}
      <Services />
      <Industries />
      <CTA />
    </section>
  );
}
