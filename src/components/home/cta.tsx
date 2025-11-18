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
        I&apos;m currently looking for new opportunities/projects. Whether you have a question or
        want to say hi, hit that connect button.
      </p>
      <CALComponent />
    </motion.div>
  );
};
