import { HighlightedLabel } from './highlighted-label';
import { motion } from 'motion/react';

export const InforArticle = () => {
  return (
    <motion.article
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      className="max-w-lg text-lg leading-relaxed"
    >
      Hey, I&apos;m Parthiv, a &nbsp;
      <HighlightedLabel text="Software Engineer." />
      <br />I build full-stack products — from backend systems to production SaaS. Currently open to
      junior engineering roles where I can ship fast and go deep.
    </motion.article>
  );
};
