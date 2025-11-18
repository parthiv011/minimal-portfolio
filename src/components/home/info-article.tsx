import React from 'react';
import { HiglightedLabel } from './highlighted-label';
import { motion } from 'motion/react';

export const InforArticle = () => {
  return (
    <motion.article
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      className="max-w-lg text-lg leading-relaxed"
    >
      Hey, I&apos;m Parthiv, a &nbsp;
      <HiglightedLabel text="Software Engineer." />
      <br />I partner with startups and businesses to craft full-stack web solutions — from MVPs to
      production-ready SaaS.
    </motion.article>
  );
};
