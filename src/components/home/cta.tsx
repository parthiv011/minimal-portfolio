import React from 'react';
import CALComponent from '../ui/cal-component';
import { motion } from 'motion/react';

export const CTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
    >
      <h2 className="font-machina my-4 font-bold">Get in touch #</h2>
      <p className="py-2">
        I&apos;m currently open to full-time engineering roles. If you&apos;re hiring or just want
        to talk — book a quick call directly below.
      </p>
      <CALComponent />
    </motion.div>
  );
};
